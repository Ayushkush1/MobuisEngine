/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0649E7',
          dark: '#022183'
        },
        secondary: '#EBF1FF',
        white: '#FEFEFE',
        black: '#101010',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '20': '20px',
      },
      maxWidth: {
        '1500': '1500px',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0649E7 0%, #022183 100%)',
        'gradient-dark-blue': 'linear-gradient(135deg, #022183 0%, #020E33 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}