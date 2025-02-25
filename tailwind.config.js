/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./public/index.html",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        body: "#DCDCDC",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
}