/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'default': ['Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        "orange": "#F16718",
        "pale-orange": "#FF9B62",
        "dark-blue": "#162542",
        "dark-grayish-blue": "#7B8BAD",
        "light-grayish-blue": "#E8EFF2",
      },
    },
  },
  plugins: [],
}