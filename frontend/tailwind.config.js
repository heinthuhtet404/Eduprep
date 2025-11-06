/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite'
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
