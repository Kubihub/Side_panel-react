/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#203A73",
        "light-white" : "#ffffff",
        "light-blue" :"#2F539B",
      }
    },
  },
  plugins: [],
}

