/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, Plugin } from 'vite'
import checker from 'vite-plugin-checker'
import handlebars from 'vite-plugin-handlebars'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
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
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }) as unknown as Plugin,
  ],
  server: {
    port: 3000,
    proxy: {
      '/api-server/': '...',
      '/authorization/': '...',
    },
  },
})
