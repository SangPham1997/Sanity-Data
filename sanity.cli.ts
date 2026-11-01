import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'homecycle-studio',
  // Tắt bundledDev để tránh lỗi OOM
  unstable_bundledDev: false,
})