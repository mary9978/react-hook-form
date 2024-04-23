/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito':['Nunito']
      },
      colors:{
        lightBlue :'#9da0dc'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

