// sanity-app/scripts/clearData.ts
import { sanityWriteClient } from './sanity.script.js'

const TYPES_TO_CLEAR = [
  'exercise',
  'exerciseCategory',
  'workoutProgram',
  'workoutWeek',
  'karateTrack',
  'karateSession',
]

async function clearType(type: string) {
  const ids: string[] = await sanityWriteClient.fetch(
    `*[_type == $type]._id`,
    { type }
  )
  if (ids.length === 0) {
    console.log(`⏭️  ${type}: 0 docs`)
    return
  }

  // Xóa theo batch 50 để tránh timeout
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50)
    const tx = sanityWriteClient.transaction()
    batch.forEach(id => tx.delete(id))
    await tx.commit()
  }
  console.log(`🗑️  ${type}: deleted ${ids.length} docs`)
}

async function main() {
  console.log('🧹 Clearing data...\n')

  if (!process.env.SANITY_API_TOKEN) {
    throw new Error('❌ Missing SANITY_API_TOKEN in .env.local')
  }

  for (const type of TYPES_TO_CLEAR) {
    await clearType(type)
  }

  console.log('\n✅ CLEAR HOÀN TẤT!')
}

main().catch(err => {
  console.error('💥 Clear failed:', err)
  process.exit(1)
})