/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'max-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'max-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'max-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
  
      'max-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'max-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'min-2xl': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }
  
      'min-xl': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }
  
      'min-lg': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }
  
      'min-md': {'min': '767px'},
      // => @media (min-width: 767px) { ... }
  
      'min-sm': {'min': '639px'},
      // => @media (min-width: 639px) { ... }
    },

    extend: {},
  }, 

  plugins: [],
}