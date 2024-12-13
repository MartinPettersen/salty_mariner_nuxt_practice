/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno", "sans-serif"],
        jacques_francois: ["Jacques Francois", "sans-serif"],
      },
    },
  },
  plugins: [],
};
