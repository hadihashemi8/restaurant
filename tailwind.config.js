/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color1": "var(--main-color1)",
        "main-color2": "var(--main-color2)",
        "main-color3": "var(--main-color3)",
        "main-color4": "var(--main-color4)"
      }
      
    },
  },
  plugins: [],
}

