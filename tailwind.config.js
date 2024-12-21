/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'popphins': ["Poppins", "serif"],
      'Volkhov': ["Volkhov", "serif"]
    },
    extend: {
      spacing: {
        'myContainer': '1200px',
      },
      boxShadow: {
        shadow1: '0px 20px 35px 0px rgba(241,165,1,0.15)',
        playShadow: '0px 15px 30px 0px rgba(223,105,81,1)',
      },
    },
  },
  plugins: [],
}