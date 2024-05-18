/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      container: {
        center: true
      }
    },
  },
  darkMode: 'class',
 
  plugins: [
    require('daisyui'),
  ],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
}

