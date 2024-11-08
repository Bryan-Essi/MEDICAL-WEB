/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sssm: '344px',
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {
      colors: {
        brightColor: "#d97706",
        backgroundColor: "#0d9488",
        lightText: "#36ae9a",
        hoverColor: "#eab308",
      },
    },
  },
  plugins: [],
}



