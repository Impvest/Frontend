/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'LineBold': ['LineBold', 'sans-serif'],
        'LineRg': ['LineRg', 'sans-serif'],
      },
      colors: {
        'greenImpvest': 'var(--green-color)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1440px', // Customize lg breakpoint
        xl: '1280px',
        '2xl': '1536px',
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

    function ({ addComponents }) {
      addComponents({
        '.article-container': {
          '@apply flex flex-col justify-end p-4 md:p-5': {},
        },
        '.article-text': {
          '@apply font-lineRg text-16px md:text-xl': {},
        },
        '.article-heading': {
          '@apply font-lineBold text-24px leading-24px md:leading-10 md:text-[40px]': {},
        },
      });
    },
    
  ],
  
}