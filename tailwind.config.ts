/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          omni: {
            blue: '#3b3db4',
            dark: '#222222',
            gray: '#666666',
            light: '#f5f5f5',
          }
        },
        fontFamily: {
          sans: ['Pretendard', '"Noto Sans KR"', 'sans-serif'],
          mont: ['Montserrat', 'Pretendard', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }