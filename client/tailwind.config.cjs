/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js'
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'], 
  },
  theme: {
    extend: {},
    screens: {
      'md': {'max': '767px'},
    },
    colors: {
      'brand': {
        DEFAULT: '#1e293b'
      },
      'link': {
        DEFAULT: '#0ea5e9'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
