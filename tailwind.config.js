/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        wellcome: "url('assets/images/b.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        playfair: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
