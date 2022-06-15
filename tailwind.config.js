/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mintyo': [ 'source-han-serif-japanese', 'serif'],
    },
    extend: {
      backgroundImage: {
        'mv_bg': "url('/dist/img/mv_bg.jpg')",
        'mv_obj': "url('/dist/img/mv_obj.svg')",
      }
    }
  },
  plugins: [],
}