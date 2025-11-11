/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#0F172A', // warna khas HyperUI (gelap elegan)
        accent: '#2563EB',  // biru modern
      },
    },
  },
  plugins: [],
}
