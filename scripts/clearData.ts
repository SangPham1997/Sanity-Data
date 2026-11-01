// sanity-app/scripts/clearData.ts
// Safe clear: dry-run + confirm + analyze patterns + verify
//
// Usage:
//   npm run clear               (dry-run, xem truoc)
//   npm run clear:execute       (xoa that, co confirm)
//   npm run clear:force         (xoa that, khong confirm)
//   npm run clear:assets        (xoa ca assets)

import { sanityWriteClient } from './sanity.script.js'

const args = process.argv.slice(2)
const DRY_RUN = !args.includes('--execute')
const SKIP_CONFIRM = args.includes('--yes')
const CLEAR_ASSETS = args.includes('--assets')

const TYPES_TO_CLEAR = [
  'exercise',
  'exerciseCategory',
  'workoutProgram',
  'workoutWeek',
  'karateTrack',
  'karateSession',
]

// Canonical patterns — de phat hien doc legacy
const CANONICAL_PATTERNS: Record<string, RegExp> = {
  karateSession: /^session-/,
  karateTrack: /^track-/,
  workoutProgram: /^program-/,
  workoutWeek: /^week-home-w\d+$/,
  exercise: /^(ex-|spine-ex-)/,
  exerciseCategory: /^(cat-|spine-cat-)/,
}

async function analyzeType(type: string) {
  const docs: any[] = await sanityWriteClient.fetch(
    `*[_type == $type]{ _id, id, name, title, _updatedAt }`,
    { type }
  )

  const pattern = CANONICAL_PATTERNS[type]
  const canonical = pattern ? docs.filter(d => pattern.test(d._id)) : docs
  const legacy = pattern ? docs.filter(d => !pattern.test(d._id)) : []

  // Detect duplicate 'id' field
  const byId = new Map<string, any[]>()
  for (const d of docs) {
    const key = d.id || d._id
    if (!byId.has(key)) byId.set(key, [])
    byId.get(key)!.push(d)
  }
  const dups = [...byId.entries()].filter(([_, list]) => list.length > 1)

  return { docs, canonical, legacy, dups }
}

async function clearType(type: string) {
  const { docs, canonical, legacy, dups } = await analyzeType(type)

  if (docs.length === 0) {
    console.log(`  [SKIP] ${type}: 0 docs`)
    return { deleted: 0, legacy: 0, dups: 0 }
  }

  console.log(`\n  [${type}] ${docs.length} docs total`)
  if (canonical.length > 0) console.log(`    Canonical: ${canonical.length}`)

  if (legacy.length > 0) {
    console.log(`    Legacy (non-canonical): ${legacy.length}`)
    legacy.slice(0, 5).forEach(d => console.log(`      - ${d._id}`))
    if (legacy.length > 5) console.log(`      ... +${legacy.length - 5} more`)
  }

  if (dups.length > 0) {
    console.log(`    Duplicate ids: ${dups.length}`)
    dups.slice(0, 5).forEach(([id, list]) =>
      console.log(`      - "${id}": ${list.length} docs (${list.map((d: any) => d._id).join(', ')})`)
    )
    if (dups.length > 5) console.log(`      ... +${dups.length - 5} more`)
  }

  if (DRY_RUN) {
    console.log(`    [DRY] Would delete all ${docs.length} docs`)
    return { deleted: 0, legacy: legacy.length, dups: dups.length }
  }

  // Delete in batches of 50
  const ids = docs.map(d => d._id)
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50)
    const tx = sanityWriteClient.transaction()
    batch.forEach(id => tx.delete(id))
    await tx.commit()
  }
  console.log(`    [OK] Deleted ${docs.length} docs`)

  return { deleted: docs.length, legacy: legacy.length, dups: dups.length }
}

async function clearAssets() {
  console.log('\n[Assets] Checking...')
  const assets: any[] = await sanityWriteClient.fetch(`
    *[_type == "sanity.imageAsset" || _type == "sanity.fileAsset"]{ _id }
  `)
  if (assets.length === 0) {
    console.log('  [SKIP] No assets')
    return 0
  }

  if (DRY_RUN) {
    console.log(`  [DRY] Would delete ${assets.length} assets`)
    return 0
  }

  for (let i = 0; i < assets.length; i += 50) {
    const batch = assets.slice(i, i + 50)
    const tx = sanityWriteClient.transaction()
    batch.forEach(a => tx.delete(a._id))
    await tx.commit()
  }
  console.log(`  [OK] Deleted ${assets.length} assets`)
  return assets.length
}

async function verifyClean() {
  console.log('\n[Verify] Checking all types empty...')
  let allClear = true
  for (const type of TYPES_TO_CLEAR) {
    const count: number = await sanityWriteClient.fetch(
      `count(*[_type == $type])`, { type }
    )
    if (count > 0) {
      allClear = false
      console.log(`  [FAIL] ${type}: ${count} docs remaining`)
    } else {
      console.log(`  [OK]   ${type}: 0 docs`)
    }
  }
  return allClear
}

async function main() {
  console.log('==============================================')
  console.log('  CLEAR DATA')
  console.log('==============================================')
  console.log(`Mode:   ${DRY_RUN ? 'DRY-RUN' : 'EXECUTE'}`)
  console.log(`Assets: ${CLEAR_ASSETS ? 'WILL CLEAR' : 'keep (use --assets)'}`)

  if (!process.env.SANITY_API_TOKEN) {
    console.error('\n[FAIL] Missing SANITY_API_TOKEN trong .env.local')
    process.exit(1)
  }

  // Confirm
  if (!DRY_RUN && !SKIP_CONFIRM) {
    console.log('\n⚠️  WARNING: This will DELETE ALL data!')
    console.log('   Type "yes" to confirm:')
    const readline = await import('node:readline/promises')
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    const answer = await rl.question('> ')
    rl.close()
    if (answer.trim().toLowerCase() !== 'yes') {
      console.log('\n[ABORT] User cancelled')
      process.exit(0)
    }
  }

  // Clear
  console.log('\n[Analysis + Clear]')
  const totals = { deleted: 0, legacy: 0, dups: 0 }
  for (const type of TYPES_TO_CLEAR) {
    const r = await clearType(type)
    totals.deleted += r.deleted
    totals.legacy += r.legacy
    totals.dups += r.dups
  }

  let assetsDeleted = 0
  if (CLEAR_ASSETS) {
    assetsDeleted = await clearAssets()
  }

  // Summary
  console.log('\n==============================================')
  console.log('  SUMMARY')
  console.log('==============================================')
  console.log(`  Docs deleted:                  ${totals.deleted}`)
  console.log(`  Legacy (non-canonical) found:  ${totals.legacy}`)
  console.log(`  Duplicate ids found:           ${totals.dups}`)
  if (CLEAR_ASSETS) console.log(`  Assets deleted:                ${assetsDeleted}`)

  if (DRY_RUN) {
    console.log('\n[DRY-RUN] No changes made.')
    console.log('\nChay xoa that:')
    console.log('  npm run clear:execute     (co confirm)')
    console.log('  npm run clear:force       (khong confirm)')
    console.log('  npm run clear:assets      (xoa ca assets)')
  } else {
    const clean = await verifyClean()
    if (clean) {
      console.log('\n✅ CLEAR COMPLETE — all types empty')
      console.log('\nNext:')
      console.log('  npm run mv:safe           (migrate lai data sach)')
    } else {
      console.log('\n⚠️  Some docs remain — check above')
      process.exit(1)
    }
  }
  console.log('==============================================\n')
}

main().catch(err => {
  console.error('\n[FAIL]', err)
  process.exit(1)
})