// sanity-app/scripts/migrate-and-verify.ts
import crypto from 'node:crypto'
import { sanityWriteClient } from './sanity.script.js'
import { exercises } from '../data/exercises.js'
import { homeWorkoutProgram } from '../data/programs/homeWorkout.js'
import { spineBarProgram } from '../data/programs/spineBar.js'
import { karateSessions } from '../data/karate/index.js'
import { KARATE_TRACKS } from '../data/karate/tracks.js'

const args = process.argv.slice(2)
const DO_CLEAR = args.includes('--clear')
const DRY_RUN = args.includes('--dry')

const slugify = (s: string) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')
const makeId = (p: string, k: string) => `${p}-${slugify(k)}`
const hash = (s: string) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 8)
const c = {
  ok: (s: string) => `\x1b[32m${s}\x1b[0m`,
  fail: (s: string) => `\x1b[31m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
}

const results = { pass: 0, fail: 0 }
const check = (name: string, ok: boolean, detail = '') => {
  if (ok) { results.pass++; console.log(`  ${c.ok('✅')} ${name} ${c.dim(detail)}`) }
  else { results.fail++; console.log(`  ${c.fail('❌')} ${name} ${detail ? c.fail(detail) : ''}`) }
}

const TYPES = ['exercise', 'workoutProgram', 'workoutWeek', 'karateTrack', 'karateSession']

async function clearAll() {
  console.log(c.bold('\n🧹 Clearing...'))
  for (const t of TYPES) {
    const ids: string[] = await sanityWriteClient.fetch(`*[_type == $t]._id`, { t })
    if (!ids.length) continue
    for (let i = 0; i < ids.length; i += 50) {
      const tx = sanityWriteClient.transaction()
      ids.slice(i, i + 50).forEach(id => tx.delete(id))
      await tx.commit()
    }
    console.log(`  🗑️  ${t}: ${ids.length}`)
  }
}

async function upsert(doc: any) {
  try { await sanityWriteClient.createOrReplace(doc); return true }
  catch (err: any) { console.error(`    ${c.fail('❌')} ${doc._type} ${doc._id}: ${err?.message}`); return false }
}

async function migrate() {
  console.log(c.bold('\n📦 Migrating...'))

  // Exercises
  for (const ex of exercises as any[]) {
    await upsert({
      _type: 'exercise', _id: makeId('ex', ex.id), name: ex.name, subName: ex.subName,
      slug: { _type: 'slug', current: slugify(ex.id) }, week: ex.week, target: ex.target,
      mode: ex.mode, duration: ex.duration, sets: ex.sets, reps: ex.reps, rest: ex.rest,
      guide: ex.guide, videoUrl: ex.videoUrl || undefined,
      category: ex.category || undefined,
      groupId: ex.groupId || undefined,
    })
  }
  console.log(`  ${c.dim('→')} exercises: ${(exercises as any[]).length}`)

  // Spine exercises
  for (const ex of (spineBarProgram as any)?.items ?? []) {
    await upsert({
      _type: 'exercise', _id: makeId('spine-ex', ex.id), name: ex.name, subName: ex.subName,
      slug: { _type: 'slug', current: slugify(ex.id) }, target: ex.target,
      mode: ex.mode, duration: ex.duration, sets: ex.sets, reps: ex.reps, rest: ex.rest,
      guide: ex.guide, videoUrl: ex.videoUrl || undefined,
      category: ex.category || undefined,
      groupId: ex.groupId || undefined,
      level: ex.level, equipment: ex.equipment, bar: ex.bar,
      spineFocus: ex.spineFocus, deskIssues: ex.deskIssues,
      safety: ex.safety, regression: ex.regression, progression: ex.progression,
    })
  }

  // === HOME WORKOUT — dedup weeks ===
  const homeItems = (homeWorkoutProgram as any)?.items ?? []
  const weekMap = new Map<number, any[]>()
  for (const item of homeItems) {
    if (!item.week) continue
    if (!weekMap.has(item.week)) weekMap.set(item.week, [])
    weekMap.get(item.week)!.push(item)
  }

  const weekDocs: any[] = []
  for (const [wkNum, items] of [...weekMap.entries()].sort((a, b) => a[0] - b[0])) {
    const d = {
      _type: 'workoutWeek', _id: makeId('week', `home-w${wkNum}`),
      weekNumber: wkNum, label: `Tuần ${wkNum}`,
      exercises: items.map((i: any) => ({ _type: 'reference', _ref: makeId('ex', i.id), _weak: true })),
    }
    weekDocs.push(d)
    await upsert(d)
  }
  console.log(`  ${c.dim('→')} workoutWeeks: ${weekDocs.length}`)

  await upsert({
    _type: 'workoutProgram', _id: 'program-home-workout', title: 'Home Workout Pro',
    slug: { _type: 'slug', current: 'home-workout-pro' }, description: 'Chương trình tập tại nhà 4 tuần.',
    accent: (homeWorkoutProgram as any).accent, groupBy: (homeWorkoutProgram as any).groupBy,
    groups: ((homeWorkoutProgram as any).groups ?? []).map((g: any) => ({
      id: g.id, label: g.label,
    })),
    items: (exercises as any[]).map(e => ({ _type: 'reference', _ref: makeId('ex', e.id), _weak: true })),
    order: 1,
  })

  // Spine Bar Program
  await upsert({
    _type: 'workoutProgram', _id: 'program-spine-bar', title: (spineBarProgram as any).title,
    subtitle: (spineBarProgram as any).subtitle, accent: (spineBarProgram as any).accent,
    groupBy: (spineBarProgram as any).groupBy,
    groups: ((spineBarProgram as any).groups ?? []).map((g: any) => ({
      id: g.id, label: g.label, short: g.short, icon: g.icon, description: g.description,
    })),
    items: ((spineBarProgram as any).items ?? []).map((e: any) => ({
      _type: 'reference', _ref: makeId('spine-ex', e.id), _weak: true,
    })),
    order: 2,
  })

  // Karate
  for (const s of karateSessions as any[]) {
    await upsert({
      _type: 'karateSession', _id: makeId('session', s.id), id: s.id, name: s.name,
      subName: s.subName, target: s.target, duration: s.duration, durationDisplay: s.durationDisplay,
      category: s.category, week: s.week, level: s.level, type: s.type, icon: s.icon,
      equipment: s.equipment, source: s.source, guide: s.guide, homework: s.homework,
      track: s.track, order: s.order, focus: s.focus, techniques: s.techniques,
      exercises: s.exercises,
    })
  }

  await upsert({
    _type: 'workoutProgram', _id: 'program-karate', title: 'Karate Training',
    subtitle: 'Karate từ cơ bản đến nâng cao',
    items: (karateSessions as any[]).map(s => ({ _type: 'reference', _ref: makeId('session', s.id), _weak: true })),
    order: 3,
  })

  console.log(`  ${c.ok('✅')} Migrate xong`)
}

async function verify() {
  console.log(c.bold('\n🔍 Verifying...\n'))

  console.log(c.bold('1️⃣  Counts'))
  const uniqueWeeks = new Set((exercises as any[]).map((e: any) => e.week)).size
  const expected = {
    exercise: (exercises as any[]).length + ((spineBarProgram as any)?.items?.length ?? 0),
    workoutProgram: 3,
    workoutWeek: uniqueWeeks,
    karateSession: (karateSessions as any[]).length,
  }
  for (const [type, exp] of Object.entries(expected)) {
    const actual = await sanityWriteClient.fetch(`count(*[_type == $t])`, { t: type })
    check(`${type}`, actual === exp, `expected=${exp} actual=${actual}`)
  }

  console.log(c.bold('\n2️⃣  Field checksums'))
  const docs: any[] = await sanityWriteClient.fetch(`
    *[_type == "exercise" && !(_id match "spine-ex-*")]{ _id, name, subName, mode, duration, sets, reps, rest, guide, videoUrl }
  `)
  let okDocs = 0
  for (const d of docs) {
    const src = (exercises as any[]).find(e => makeId('ex', e.id) === d._id)
    if (!src) continue
    const s = hash([src.name, src.subName, src.mode, src.duration, src.sets, src.reps, src.rest, src.guide, src.videoUrl].join('|'))
    const v = hash([d.name, d.subName, d.mode, d.duration, d.sets, d.reps, d.rest, d.guide, d.videoUrl].join('|'))
    if (s === v) okDocs++
    else console.log(`    ${c.fail('❌')} mismatch: ${d._id}`)
  }
  check(`exercise fields match`, okDocs === docs.length, `${okDocs}/${docs.length}`)

  console.log(c.bold('\n3️⃣  Relationships'))
  const noCat = await sanityWriteClient.fetch(`count(*[_type == "exercise" && !(_id match "spine-ex-*") && !defined(category)])`)
  check(`exercises có category`, noCat === 0, `thiếu=${noCat}`)

  const noTrack = await sanityWriteClient.fetch(`count(*[_type == "karateSession" && !defined(track)])`)
  check(`karateSessions có track`, noTrack === 0, `thiếu=${noTrack}`)

  const progs: any[] = await sanityWriteClient.fetch(`*[_type == "workoutProgram"]{_id, "items": count(items)}`)
  const home = progs.find(p => p._id === 'program-home-workout')
  check(`program-home-workout có items`, (home?.items ?? 0) > 0, `items=${home?.items}`)

  // Kiểm tra số exercises trong mỗi week
  const weeks: any[] = await sanityWriteClient.fetch(`*[_type == "workoutWeek"]{_id, weekNumber, "exCount": count(exercises)} | order(weekNumber asc)`)
  for (const w of weeks) {
    const srcWeek = (exercises as any[]).filter(e => e.week === w.weekNumber).length
    check(`week-${w.weekNumber} có đúng ${srcWeek} exercises`, w.exCount === srcWeek, `actual=${w.exCount}`)
  }
}

async function main() {
  console.log(c.bold('🚀 Migrate & Verify'))
  if (!process.env.SANITY_API_TOKEN) { console.error(c.fail('❌ Missing token')); process.exit(1) }
  if (!DRY_RUN) {
    if (DO_CLEAR) await clearAll()
    await migrate()
  }
  await verify()

  console.log(c.bold('\n' + '='.repeat(50)))
  console.log(`  ${c.ok(`✅ Pass: ${results.pass}`)}`)
  console.log(`  ${results.fail ? c.fail(`❌ Fail: ${results.fail}`) : c.dim('❌ Fail: 0')}`)
  console.log(c.bold('='.repeat(50)))
  if (results.fail) process.exit(1)
  console.log(c.ok('\n🎉 ALL PASS!\n'))
}

main().catch(err => { console.error(c.fail('\n💥 Failed:'), err); process.exit(1) })