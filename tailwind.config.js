/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "banner-bg": 'url("http://localhost:3000/banner.png")',
        "snow-hills": 'url("http://localhost:3000/most-people/snow-hills.png")',
        village: 'url("http://localhost:3000/most-people/village.png")',
        "buck-kit": 'url("http://localhost:3000/most-people/buck-kit.png")',
        "new-dream": 'url("http://localhost:3000/most-people/new-dream.png")',
        ithaly: 'url("http://localhost:3000/most-people/ithaly.png")',
        "lake-silent":
          'url("http://localhost:3000/most-people/lake-silent.png")',
      },
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
