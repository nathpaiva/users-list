import { defineConfig, type UserConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import type { InlineConfig } from 'vitest'

import react from '@vitejs/plugin-react'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      include: ['src/**/*'],
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/**/index.ts',
        'src/**/index.tsx',
        'src/**/*.d.ts',
        'src/**/mock.ts',
      ],
      all: true,
      branches: 0, // 40,
      functions: 0, // 50,
      lines: 0, // 50,
      statements: 0, // 50,
      cleanOnRerun: false,
    },
  },
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    port: 3000,
  },
} as VitestConfigExport)
