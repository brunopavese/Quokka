/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '25vw': '25vw',
        '33vw': '33vw',
        '50vw': '50vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '30rem': '30rem',
      },
    },
    minWidth: {
      40: '10rem',
    },
    maxWidth: {
      '25vw': '25vw',
      '33vw': '33vw',
      '50vw': '50vw',
      '80vw': '80vw',
      '90vw': '90vw',
    },
  },
  plugins: [],
}
