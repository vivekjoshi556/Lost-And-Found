module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#a3a5a8",
          100: "#999b9e",
          200: "#3e3e3e",
          300: "#313131",
          400: "#2a2a2a",
          500: "#282828",
          600: "#1a1a1a",
        }
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
