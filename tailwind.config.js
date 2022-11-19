/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mgh-primary': '#206B9E',
        'mgh-primary-dark': '#024775',
        'mgh-medium-grey': '#6B7280',
        'mgh-dark-grey': '#4B5563',
        'mgh-light-grey': '#ABADC6',
        'mgh-highlight-red': '#CD4F4F',
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
