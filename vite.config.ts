import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [react()],
  // base: '/react-ts-mobx-todo/',
})
