/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BD10E0"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

