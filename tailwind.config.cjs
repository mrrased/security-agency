/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        Bellota_Text: 'Bellota Text'
      },
      boxShadow:{
        boxShadow: '-0.5em -0.5em 1em #fff, 0.6em 0.6em 1.2em #d2dce9' 
      },
      backgroundImage:{
        bacgroundImage:"url('./images/mbr.jpeg')"
      },
      colors:{
        gray_custom: '#f2f3f7',
      },
      backgroundPosition:{
        background_Position: 'center center'
      },
      backfaceVisibility:{
        backface_visibility: 'hidden'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  
}
