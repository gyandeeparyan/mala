/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#f59e0b",
        sandal: "#fde68a",
        temple: "#7c3f00",
        leaf: "#166534",
        rose: "#be123c"
      },
      boxShadow: {
        aura: "0 0 0 3px rgba(245, 158, 11, 0.24)"
      }
    }
  },
  plugins: []
};