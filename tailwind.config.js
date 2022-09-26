/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./partials/**/*.hbs",
      "./templates/**/*.hbs",
      "./src/**/*.js",
      "./src/**/*.ts",
  ],
  theme: {
      container: {
          center: true,
      },
      colors: {
          'transparent': 'transparent',
          'white': '#ffffff',
          'black': '#000000',
          'red': '#d61a0c',
          'blue': '#10106a',
          'light_black': '#57585A',
          'footer_bg': '#4d4e53',
          'dark_black': '#3f4044',
          'facebook': '#45619d',
          'light': '#fafafa',
          'blue-primary': '#115EAC',
          'blue-light': '#3979ba',
          'blue-dark': '#003f7e',
          'text-blue-dark': '#004B97',
          'nearby-bg': '#337DC6',

          'green': '#348B31'

          
        
          
      },

      fontFamily: {
        'optimabold': ['"optimabold", Georgia, Arial, sans-serif'],
        'optimanormal': ['"optimanormal", Georgia, Arial, sans-serif'],
        },
      extend: {
        backgroundImage: {
            'bodypattern': "url('images/texturebg.jpg')",
            'top-pattern': "url('images/shape-top.svg')",
            'hour-pattern': "url('images/hourshape.svg')",
            'page-pattern': "url('images/shape-big.svg')",
            'hero-bg': "url('images/default-header.jpg')",
            'abstra-bg': "url('images/absrt-bg.svg')",
            'abstra-mid': "url('images/abst-mid.svg')",
            'faci-bg': "url('images/faci-bg.jpg')",
            'ring-shape': "url('images/ring.png')",
            'br-arrow': "url('images/br-arrow.svg')",
            'faq-act': "url('images/faq-act.svg')",
            'faq-d': "url('images/faq-d.svg')",

          }
      },
  },
  plugins: [],
}