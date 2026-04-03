/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#064e3b',   
          primary: '#059669', 
          light: '#ecfdf5',   
          gold: '#d97706'     
        }
      }
    },
  },
  plugins: [],
}
