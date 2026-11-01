import { sanityWriteClient } from './sanity.script.js'
import { exercises } from '../data/exercises.js'
import { homeWorkoutProgram } from '../data/programs/homeWorkout.js'
import { spineBarProgram } from '../data/programs/spineBar.js'
import { karateSessions } from '../data/karate/index.js'
import { KARATE_TRACKS } from '../data/karate/tracks.js'

async function migrateExercises() {
  console.log('📦 Migrating exercises...')
  for (const ex of exercises) {
    await sanityWriteClient.createIfNotExists({
      _id: ex.id,
      _type: 'exercise',
      ...ex,
    })
  }
  console.log(`✅ ${exercises.length} exercises migrated`)
}

async function migrateHomeWorkout() {
  console.log('📦 Migrating homeWorkoutProgram...')
  await sanityWriteClient.createIfNotExists({
    _id: homeWorkoutProgram.id,
    _type: 'workoutProgram',
    ...homeWorkoutProgram,
  })
  console.log('✅ homeWorkoutProgram migrated')
}

async function migrateSpineBar() {
  console.log('📦 Migrating spineBarProgram...')
  await sanityWriteClient.createIfNotExists({
    _id: spineBarProgram.id,
    _type: 'workoutProgram',
    ...spineBarProgram,
  })
  console.log('✅ spineBarProgram migrated')
}

async function migrateKarate() {
  console.log('📦 Migrating karate data...')
  
  // Migrate tracks first
  for (const track of KARATE_TRACKS) {
    await sanityWriteClient.createIfNotExists({
      _id: `track-${track.id}`,
      _type: 'karateTrack',
      ...track,
    })
  }
  console.log(`✅ ${KARATE_TRACKS.length} karate tracks migrated`)

  // Migrate sessions
  for (const session of karateSessions) {
    await sanityWriteClient.createIfNotExists({
      _id: session.id,
      _type: 'karateSession',
      ...session,
    })
  }
  console.log(`✅ ${karateSessions.length} karate sessions migrated`)
}

async function main() {
  try {
    console.log('🚀 Starting migration...')
    
    await migrateExercises()
    await migrateHomeWorkout()
    await migrateSpineBar()
    await migrateKarate()
    
    console.log('🎉 MIGRATION HOÀN TẤT!')
  } catch (error) {
    console.error('💥 Migration failed:', error)
    process.exit(1)
  }
}

main()