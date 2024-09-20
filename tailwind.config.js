/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#00c3c7",
        primary: "#2092e9",
        secondary: "#3fa4f1",
        dark:"#0a2847",
       

        'stroke-white': '#ffffff',
        'stroke-black': '#000000',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily:{
          serif: ["Source Sans 3", "sans-serif"],
          anton: ['Anton', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          montserrat:['Montserrat', 'sans-serif'],
      },

      
    },
  },
  plugins: [
//sombra texto
    require("@designbycode/tailwindcss-text-shadow")
    ({
      shadowColor: "rgba(255, 255, 255, 1)",
      shadowBlur: "4px",
      shadowOffsetX: "3px",
      shadowOffsetY: "3px",
  })
    
   
  ],
};


