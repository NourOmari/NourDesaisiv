/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        orange: "#F38C10",
        sienna: "#A7763B",
        lightsteelb: "#CCD7D8",
        "olive-green": "#4C482E",
        "pastel-pink": "#D2B6BA",
        beige: "#F2EFE5",
      },
    },
  },
  plugins: [],
};
