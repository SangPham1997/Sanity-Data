import { buildTheme } from '@sanity/themer'

export const theme = buildTheme({
  light: {
    accent: '#10b981',
    background: '#ffffff',
    text: '#1e293b',
    contrast: 80,
  },
  dark: {
    accent: '#10b981',
    background: '#0f172a',
    text: '#f1f5f9',
    contrast: 80,
  },
})