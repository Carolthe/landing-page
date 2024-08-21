/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      backgroundImage: {
        'graphic-pattern': "url('../img/Graphic.png')",
      },
      colors: {
        'green': '#458c7e',
        'greenclaro': '#96cfcf'
    },
    fontFamily: {
      fraunces: ['Fraunces'],
      barlow: ['Barlow']
    }
    },
  },
  plugins: [
  
  ],
}

