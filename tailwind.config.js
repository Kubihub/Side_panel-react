/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#A3AED0",
        "light-white" : "#ffffff",
        "light-blue" :"#2F539B",
        "back-color" : "#F4F7FE",
        "secondary-color" : "#A3AED0",
        "deep-blue":"#2B3674"
      }
    },
  },
  plugins: [],
}

