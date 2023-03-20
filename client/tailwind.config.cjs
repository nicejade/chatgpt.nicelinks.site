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
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "p, li, pre, code, dl": { 
              fontSize: '1rem',
              margin: 0,
            },
            "ul, ol": {
              lineHeight: "1rem",
            },
            "ol li": {
              listStyleType: "decimal",
              marginLeft: "1.6rem"
            },
            "ul li": {
              listStyleType: "disc",
            },
            "h2, h3": {
              marginTop: 0
            },
            "h4, h5, h6": {
              fontSize: '1.25rem',
            },
            pre: {
              color: "#2f2f2f",
              backgroundColor: "#2f2f2f",
            },
            "pre code::before": {
              "padding-left": "unset",
            },
            "pre code::after": {
              "padding-right": "unset",
            },
            img: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#0ea5e9",
              textDecoration: 'none',
            },
            code: {
              backgroundColor: "#f3f4f6",
              color: "#f59e0b",
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/typography"),
  ],
}
