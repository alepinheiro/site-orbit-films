/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'pear': '#B7EF47',
        'mountain-meadow': '#1FCB64',
        'eletric-purple': '#8048FF',
        'tangaroa': '#121A24',
        'razzle-dazzle': '#DD47C5',
        'mint-green': '#80FF92',
        'nero': '#272727',
        'pacific-blue': '#01A0BE',
        'gondola': '#363636',
        'burnt-orange': '#FF7B31',
      }
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        orbit: {
          "primary": "#661AE6",
          "secondary": "#D926AA",
          "accent": "#1FB2A5",
          "neutral": "#fff",
          "base-100": "#e5e5e5",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
