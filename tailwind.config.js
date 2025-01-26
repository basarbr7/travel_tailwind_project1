/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "serif"], // Corrected typo
      'volkhov': ["Volkhov", "serif"],
      'openSans': ["Open Sans", "serif"],
    },
    extend: {
      letterSpacing: {
        'custom': '0.015em', // Custom letter-spacing for 1.5%
      },
      backgroundImage: {
        'conic-custom': `conic-gradient(

        from 180deg,
        #B8D2F1 0%,
        #F289AA 17%,
        #C68BF0 29%,
        #D164DA 43%,
        #C963E8 61%,
        #BFC2E8 72%,
        #FFC999 80%,
        #CED8CB 100%,
        #FFFFFF 100%
        )`,
      },
      spacing: {
        'myContainer': '1200px', 
      },
      boxShadow: {
        shadow1: '0px 20px 35px 0px rgba(241,165,1,0.15)',
        playShadow: '0px 15px 30px 0px rgba(223,105,81,1)',
        customShadow: '0px 38.9px 29.16px 0px rgba(0,0,0,0.11)',
        footerShadow: '0px 2px 10px 0px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
