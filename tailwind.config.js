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
      // container: {
      //   center: true, // Centers the container
      //   padding: {
      //     DEFAULT: '1rem', // Default padding (16px)
      //     // sm: '2rem',      // Padding for small screens
      //     // lg: '4rem',      // Padding for large screens
      //     // xl: '5rem',      // Padding for extra-large screens
      //     // '2xl': '6rem',   // Padding for 2xl screens
      //   },
      //   screens: {
      //     sm: '640px',  // Small screens
      //     md: '768px',  // Medium screens
      //     lg: '1024px', // Large screens
      //     xl: '1200px', // Extra-large screens
      //     '2xl': '1536px', // 2X Extra-large screens
      //   },
      // },
      spacing: {
        'myContainer': '1200px',
      },
      boxShadow: {
        shadow1: '0px 20px 35px 0px rgba(241,165,1,0.15)',
        playShadow: '0px 15px 30px 0px rgba(223,105,81,1)',
        serviceShadow: '0px 38.9px 29.16px 0px rgba(0,0,0,0.11)',
        sellingShadow: '0px 38.9px 29.16px 0px rgba(0,0,0,0.11)',
        tripShadow: '0px 38.9px 29.16px 0px rgba(0,0,0,0.11)',
      },
    },
  },
  plugins: [],
};
