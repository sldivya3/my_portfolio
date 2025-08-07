/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'typewriter': 'typing 3s steps(30, end) forwards, blink 0.95s step-end infinite',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '40%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#4b5563' }, 
        },
      },
    },
  },
  plugins: [],
}
