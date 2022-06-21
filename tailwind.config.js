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
        "banner-bg": 'url("https://web-landing-travel.vercel.app/banner.png")',
        "snow-hills":
          'url("https://web-landing-travel.vercel.app/most-people/snow-hills.png")',
        village:
          'url("https://web-landing-travel.vercel.app/most-people/village.png")',
        "buck-kit":
          'url("https://web-landing-travel.vercel.app/most-people/buck-kit.png")',
        "new-dream":
          'url("https://web-landing-travel.vercel.app/most-people/new-dream.png")',
        ithaly:
          'url("https://web-landing-travel.vercel.app/most-people/ithaly.png")',
        "lake-silent":
          'url("https://web-landing-travel.vercel.app/most-people/lake-silent.png")',
      },
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
