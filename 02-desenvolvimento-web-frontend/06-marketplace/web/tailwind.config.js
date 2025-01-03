/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }], // Bold
        'title-md': ['24px', { lineHeight: '120%', fontWeight: '700' }], // Bold
        'title-sm': ['18px', { lineHeight: '120%', fontWeight: '700' }], // Bold

        'subtitle': ['16px', { lineHeight: '120%', fontWeight: '600' }], // Semibold
        'body-md': ['16px', { lineHeight: '120%', fontWeight: '400' }], // Regular
        'body-sm': ['14px', { lineHeight: '120%', fontWeight: '400' }], // Regular
        'body-xs': ['12px', { lineHeight: '120%', fontWeight: '400' }], // Regular

        'label-md': ['12px', { lineHeight: '120%', fontWeight: '500', textTransform: 'uppercase' }], // Medium, Uppercase
        'label-sm': ['10px', { lineHeight: '120%', fontWeight: '500', textTransform: 'uppercase' }], // Medium, Uppercase

        'action-md': ['16px', { lineHeight: '120%', fontWeight: '500' }], // Medium
        'action-sm': ['14px', { lineHeight: '120%', fontWeight: '500' }], // Medium
      },
      colors: {
        orange: {
          base: '#F24D0D',
          dark: '#C43C08',
        },
        blue: {
          light: '#D7EFF9',
          base: '#5EC5FD',
          dark: '#009CF0',
        },
        shape: {
          white: '#FFFFFF',
          background: '#FBF4F4',
          shape: '#F5EAEA',
        },
        grayscale: {
          100: '#ADADAD',
          200: '#949494',
          300: '#666666',
          400: '#3D3D3D',
          500: '#1D1D1D',
        },
        semantic: {
          danger: '#DC3545',
          success: '#28A745',
        },
      },
    },
  },
  plugins: [],
}