/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0C0C0C",
        accentGray: "#D7E2EA",
        subtleGray: "#646973",
        lightSteel: "#BBCCD7",
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
