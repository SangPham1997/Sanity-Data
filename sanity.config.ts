import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import exercise from './schemas/exercise'
import workoutProgram from './schemas/workoutProgram'
import karateSession from './schemas/karateSession'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'bw4u55x1'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'homecycle-studio',
  title: 'Homecycle Studio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [
      exercise,
      workoutProgram,
      karateSession,
    ],
  },
})