import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "primary": "#38bdf8",
        "secondary": "#0f172a",
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})