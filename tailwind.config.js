/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   "relative: true" ,
    "transform: (content) => content.replace(/taos:/g, '')",
    "files: ['./src/*.{html,js}']",
  ],
  theme: {
    extend: {
      
     
    },
  },
  plugins: [
    nextui(),
    require('preline/plugin'),
     
    require('tailwindcss-animated')
  ],
  
  
}

