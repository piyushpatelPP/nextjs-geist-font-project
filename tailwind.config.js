/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#ffffff',
        accent: '#f3f4f6',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        '2xs': '.625rem',
      },
      boxShadow: {
        'product': '0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
