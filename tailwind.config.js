/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,ts}","./node_modules/flowbite/**/*.js"],
  theme: {
    
    extend: {
      colors: {
        'main':"#0aad0a",
        'active':" #45e401dc",
        'color':"withe",
      },
    // background-color:{
    //     'active':" #45e401dc",
    //     'color':"withe",
    //   },

    },
  },
  plugins: [require('flowbite/plugin')],
}

