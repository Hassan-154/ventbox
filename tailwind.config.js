/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '100': '101vh',     // Custom height value
      },
      maxHeight: {
        'logo': '32vh',
        'logoSM': '24vh',
        'pipe': '55vh',
      },
      maxWidth: {
        'pipe': '22rem', // You can use any value you want here
      },
    },
  },
  plugins: [],
}