/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00B4D8", // Shpree blue
          dark: "#0077A3",    // darker shade
          light: "#90E0EF"    // lighter shade
        }
      }
    }
  },
  plugins: [],
}
