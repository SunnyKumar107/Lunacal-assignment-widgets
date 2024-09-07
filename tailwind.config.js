/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #373e44 -100%, #191b1f)'
      }
    }
  },
  plugins: []
}
