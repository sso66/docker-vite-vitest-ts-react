import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
// export default {
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx'],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'var(--font-manrope)',
      },
      colors: {
        ...defaultTheme.colors,
        theme: '#7743D8',
        light: {
          primary: 'FFFFFF',
          secondary: 'F1F1EF',
        },
        dark: {
          primary: '0F0F0F',
          secondary: '202020',
        },
        background: 'F5F5F5',
      },
      screens: {
        ...defaultTheme.screens,
        xs: '340px',
        sm: '420',
      },
      spacing: {
        spacing: {
          ...defaultTheme.spacing,
          1: '5px',
          2: '10px',
          3: '15px',
          4: '20px',
          5: '25px',
        },
      },
    },
  },
  plugins: [],
}

export default config
