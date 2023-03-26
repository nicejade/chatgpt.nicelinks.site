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
        "tiny": '16rem'
      },
      typography: {
        DEFAULT: {
          css: {
            "li, pre, code": { 
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
            "div p": {
              marginTop: "0.5rem !important",
              marginBottom: "0.5rem !important",
            },
            "li p": {
              marginTop: "0 !important",
              marginBottom: "0 !important",
            },
            "h2": {
              fontSize: "1.25rem",
            },
            "h2, h3": {
              marginTop: "1.25rem"
            },
            "h4, h5, h6": {
              fontSize: "1.125rem",
              marginTop: "1.125rem",
            },
            "pre code::before": {
              paddingLeft: "unset",
            },
            "pre code::after": {
              paddingRight: "unset",
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
              border: "1px solid #e8e8e8",
              borderRadius: "0.5rem",
            },
            "pre, code": {
              color: "#213547",
              backgroundColor: "#ffffff",
            },
            "p code": {
              backgroundColor: "#f3f4f6",
              color: "#f59e0b",
              fontWeight: "400",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: '""',
              paddingLeft: "0.25rem",
            },
            "code::after": {
              content: '""',
              paddingRight: "0.25rem",
            },
            "table": {
              "border-top-width": "1px",
              "border-bottom-width": "1px"
            },
            "thead tr th": {
              "padding-top": "0.5rem",
              "padding-bottom": "0.5rem",
            }
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
