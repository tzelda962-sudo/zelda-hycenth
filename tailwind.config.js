/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/presentation/**/*.{js,vue,ts}",
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
