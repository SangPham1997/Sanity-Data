// sanity-app/scripts/safeMigrate.ts
// Safe migrate: cleanup old docs -> migrate with canonical _id -> verify no dup
// Chạy: npm run mv:safe          (thật)
//       npm run mv:safe:dry      (dry-run)

import { sanityWriteClient } from './sanity.script.js'
import { exercises } from '../data/exercises.js'
import { homeWorkoutProgram } from '../data/programs/homeWorkout.js'
import { spineBarProgram } from '../data/programs/spineBar.js'
import { karateSessions } from '../data/karate/index.js'
import { KARATE_TRACKS } from '../data/karate/tracks.js'

const DRY_RUN = process.argv.includes('--dry')

// ===== Canonical _id patterns (doc phải bắt đầu bằng 1 trong các prefix này) =====
const CANONICAL_PATTERNS = {
  karateSession:    ['session-'],
  karateTrack:      ['track-'],
  workoutProgram:   ['program-'],
  workoutWeek:      ['week-'],
  exercise:         ['ex-', 'spine-ex-'],
  exerciseCategory: ['cat-', 'spine-cat-'],
}

const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')
const makeId = (p, k) => `${p}-${slugify(k)}`

// ===== HELPERS =====
async function deleteDocs(ids, label) {
  if (ids.length === 0) return
  if (DRY_RUN) {
    console.log(`  [DRY] Would delete ${ids.length} ${label}:`)
    ids.forEach(id => console.log(`        - ${id}`))
    return
  }
  for (let i = 0; i < ids.length; i += 50) {
    const tx = sanityWriteClient.transaction()
    ids.slice(i, i + 50).forEach(id => tx.delete(id))
    await tx.commit()
  }
  console.log(`  [OK]  Deleted ${ids.length} ${label}`)
}

// ===== STEP 1: CLEANUP =====
async function cleanupNonCanonical() {
  console.log('\n[STEP 1] Cleanup non-canonical docs...\n')
  let total = 0

  for (const [type, prefixes] of Object.entries(CANONICAL_PATTERNS)) {
    const allDocs = await sanityWriteClient.fetch(
      `*[_type == $type] { _id }`, { type }
    )
    const toDelete = allDocs
      .filter(d => !prefixes.some(p => d._id.startsWith(p)))
      .map(d => d._id)

    if (toDelete.length > 0) {
      await deleteDocs(toDelete, `${type} (non-canonical)`)
      total += toDelete.length
    } else {
      console.log(`  [SKIP] ${type}: 0 non-canonical docs (total: ${allDocs.length})`)
    }
  }

  // Special: workoutWeek — dedup by weekNumber field
  const weeks = await sanityWriteClient.fetch(
    `*[_type == "workoutWeek"] { _id, weekNumber, _updatedAt }`
  )
  const byWeekNum = new Map()
  for (const w of weeks) {
    if (!byWeekNum.has(w.weekNumber)) byWeekNum.set(w.weekNumber, [])
    byWeekNum.get(w.weekNumber).push(w)
  }
  const dupWeeks = []
  for (const [num, group] of byWeekNum) {
    if (group.length > 1) {
      const canonical = `week-home-w${num}`
      const keep = group.find(d => d._id === canonical) || group[0]
      for (const d of group) {
        if (d._id !== keep._id) dupWeeks.push(d._id)
      }
    }
  }
  if (dupWeeks.length > 0) {
    await deleteDocs(dupWeeks, 'workoutWeek (duplicate weekNumber)')
    total += dupWeeks.length
  }

  console.log(`\n  Total deleted: ${total}`)
}

// ===== STEP 2: MIGRATE =====
async function upsert(doc) {
  try {
    await sanityWriteClient.createOrReplace(doc)
    return true
  } catch (err) {
    console.error(`  [FAIL] ${doc._type}/${doc._id}:`, err.message)
    return false
  }
}

async function migrate() {
  console.log('\n[STEP 2] Migrate...\n')

  // Exercises (main)
  console.log(`  exercises: ${exercises.length}`)
  for (const ex of exercises) {
    await upsert({
      _type: 'exercise',
      _id: makeId('ex', ex.id),
      id: ex.id,
      name: ex.name,
      subName: ex.subName,
      target: ex.target,
      mode: ex.mode,
      duration: ex.duration,
      sets: ex.sets,
      reps: ex.reps,
      rest: ex.rest,
      guide: ex.guide,
      videoUrl: ex.videoUrl || undefined,
      category: ex.category,
      week: ex.week,
      type: ex.type,
      svg: ex.svg,
    })
  }

  // Exercises (spine)
  const spineItems = spineBarProgram?.items ?? []
  console.log(`  spine exercises: ${spineItems.length}`)
  for (const ex of spineItems) {
    await upsert({
      _type: 'exercise',
      _id: makeId('spine-ex', ex.id),
      id: ex.id,
      name: ex.name,
      subName: ex.subName,
      target: ex.target,
      mode: ex.mode,
      duration: ex.duration,
      sets: ex.sets,
      reps: ex.reps,
      rest: ex.rest,
      guide: ex.guide,
      videoUrl: ex.videoUrl || undefined,
      level: ex.level,
      equipment: ex.equipment,
      bar: ex.bar,
      spineFocus: ex.spineFocus,
      deskIssues: ex.deskIssues,
      safety: ex.safety,
      regression: ex.regression,
      progression: ex.progression,
      groupId: ex.groupId,
    })
  }

  // Workout weeks (dedup by weekNumber)
  const homeItems = homeWorkoutProgram?.items ?? []
  const weekMap = new Map()
  for (const item of homeItems) {
    if (!item.week) continue
    if (!weekMap.has(item.week)) weekMap.set(item.week, [])
    weekMap.get(item.week).push(item)
  }
  console.log(`  workout weeks: ${weekMap.size}`)
  for (const [num, items] of [...weekMap.entries()].sort((a, b) => a[0] - b[0])) {
    await upsert({
      _type: 'workoutWeek',
      _id: `week-home-w${num}`,
      weekNumber: num,
      label: `Tuần ${num}`,
      exercises: items.map(i => ({ _type: 'reference', _ref: makeId('ex', i.id), _weak: true })),
    })
  }

  // Karate sessions
  console.log(`  karate sessions: ${karateSessions.length}`)
  for (const s of karateSessions) {
    await upsert({
      _type: 'karateSession',
      _id: `session-${s.id}`,
      id: s.id,
      name: s.name,
      subName: s.subName,
      target: s.target,
      duration: s.duration,
      durationDisplay: s.durationDisplay,
      category: s.category,
      week: s.week,
      level: s.level,
      type: s.type,
      icon: s.icon,
      equipment: s.equipment,
      source: s.source,
      guide: s.guide,
      homework: s.homework,
      track: s.track,
      order: s.order,
      focus: s.focus,
      techniques: s.techniques,
      exercises: s.exercises,
    })
  }

  // Karate tracks
  console.log(`  karate tracks: ${KARATE_TRACKS.length}`)
  for (const t of KARATE_TRACKS) {
    await upsert({
      _type: 'karateTrack',
      _id: `track-${t.id}`,
      trackId: t.id,
      label: t.label,
      description: t.description,
      icon: t.icon,
      sessions: karateSessions
        .filter(s => s.track === t.id)
        .map(s => ({ _type: 'reference', _ref: `session-${s.id}`, _weak: true })),
    })
  }

  // Programs
  console.log(`  workout programs: 3`)
  await upsert({
    _type: 'workoutProgram',
    _id: 'program-home-workout',
    title: 'Home Workout Pro',
    slug: { _type: 'slug', current: 'home-workout-pro' },
    description: 'Chương trình tập luyện tại nhà 4 tuần.',
    programType: 'weekly',
    order: 1,
    isActive: true,
  })
  await upsert({
    _type: 'workoutProgram',
    _id: 'program-spine-bar',
    title: spineBarProgram?.title || 'Spine Bar',
    slug: { _type: 'slug', current: 'spine-bar' },
    description: spineBarProgram?.subtitle,
    programType: 'library',
    order: 2,
    isActive: true,
  })
  await upsert({
    _type: 'workoutProgram',
    _id: 'program-karate',
    title: 'Karate Training',
    slug: { _type: 'slug', current: 'karate-training' },
    description: 'Karate từ cơ bản đến nâng cao.',
    programType: 'karate',
    order: 3,
    isActive: true,
  })
}

// ===== STEP 3: VERIFY =====
async function verifyNoDuplicates() {
  console.log('\n[STEP 3] Verify no duplicates...\n')
  let allOK = true

  for (const type of Object.keys(CANONICAL_PATTERNS)) {
    const docs = await sanityWriteClient.fetch(
      `*[_type == $type] { _id, id }`, { type }
    )

    // Check by 'id' field (karateSession có id, exercise có id, ...)
    const idCount = new Map()
    for (const d of docs) {
      const key = d.id || d._id
      idCount.set(key, (idCount.get(key) || 0) + 1)
    }
    const dups = [...idCount.entries()].filter(([_, c]) => c > 1)

    if (dups.length > 0) {
      allOK = false
      console.log(`  [FAIL] ${type}: ${dups.length} duplicate ids`)
      dups.forEach(([id, c]) => console.log(`         - ${id}: ${c} docs`))
    } else {
      console.log(`  [OK]   ${type}: ${docs.length} docs`)
    }
  }

  return allOK
}

// ===== MAIN =====
async function main() {
  console.log('==============================================')
  console.log('  SAFE MIGRATE (cleanup -> migrate -> verify)')
  console.log('==============================================')
  console.log(`Mode: ${DRY_RUN ? 'DRY-RUN' : 'EXECUTE'}`)

  if (!process.env.SANITY_API_TOKEN) {
    console.error('\n[FAIL] Missing SANITY_API_TOKEN trong .env.local')
    process.exit(1)
  }

  await cleanupNonCanonical()

  if (DRY_RUN) {
    console.log('\n[DRY-RUN] Skipping migrate.')
    console.log('Run without --dry to apply changes.\n')
    return
  }

  await migrate()
  const ok = await verifyNoDuplicates()

  console.log('\n==============================================')
  if (ok) {
    console.log('DONE. All clean, no duplicates.')
    console.log('\nNext: reload React app, clear localStorage')
  } else {
    console.log('FAIL. Duplicates remain - check above.')
    process.exit(1)
  }
  console.log('==============================================\n')
}

main().catch(err => {
  console.error('\n[FAIL]', err)
  process.exit(1)
})