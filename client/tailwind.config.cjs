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
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
    },
    colors: {
      'brand': {
        DEFAULT: '#1e293b'
      },
      'warn': {
        DEFAULT: '#f59e0b'
      },
      'link': {
        DEFAULT: '#0ea5e9'
      }
    },
    extend: {
      maxWidth: {
        "tiny": '15rem'
      },
      typography: {
        DEFAULT: {
          css: {
            "li, pre, code": { 
              fontSize: '1rem',
              margin: '0 !important',
              lineHeight: "1.5rem",
            },
            "dl, ul, ol": {
              margin: '0 !important',
              lineHeight: "0",
            },
            "ol li": {
              listStyleType: "decimal",
              marginLeft: 0
            },
            "ul li": {
              listStyleType: "disc",
              marginLeft: 0,
            },
            "p": {
              "margin-top": "1rem",
              "margin-bottom": "1rem"
            },
            "h2, h3": {
              marginTop: 0
            },
            "h4, h5, h6": {
              fontSize: '1.25rem',
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
            "pre": {
              "border": "1px solid #e8e8e8",
              "border-radius": "0.5rem",
            },
            "pre, code": {
              color: "#213547",
              backgroundColor: "#ffffff",
            },
            "p code": {
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
