/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#0f172a",
          400: "#94a3b8",
          200: "#e2e8f0",
        },
        teal: {
          300: "#4fd1c5",
          400: "#38b2ac",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

