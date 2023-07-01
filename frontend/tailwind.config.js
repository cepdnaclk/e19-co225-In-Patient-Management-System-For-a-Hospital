/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "blue-gray": "#334155",
        "dark-blue": "#172554",
        "dark-blue-2": "#1e3a8a",
        "Dark-purple": "#312e81",
        "gray": "#212121"
      },
    },
  },
  plugins: [],
}

