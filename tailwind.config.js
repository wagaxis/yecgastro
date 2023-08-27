/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        wellcome: "url('assets/images/b.webp')",
        about: "url('assets/images/about-food-bg.webp')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        playfair: ["Playfair Display"],
      },
      colors: {
        default: "#2D2D2D",
        title: "#C19855",
        description: "#8A8A8A",
        hover: "#E0B87B",
      },
    },
  },
  plugins: [],
};
