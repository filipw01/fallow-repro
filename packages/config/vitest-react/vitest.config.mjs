import 'happy-dom'
import { defineConfig } from 'vitest/config'

const baseConfig = defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    environment: 'happy-dom',
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['**/*.config.*'],
  },
})
