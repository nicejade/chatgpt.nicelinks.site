/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'max': '767px'},
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
