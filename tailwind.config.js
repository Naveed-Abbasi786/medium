/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SohneBold: ['SohneBold', 'sans-serif'], 
        SohneNormal:['SohneNormal','sans-serif'],
        Sohne:['Sohne','sans-serif'],
        Source:['Source','serif'],
        Super:['Super','serif'],

      },
    },
  },
  plugins: [],
}
