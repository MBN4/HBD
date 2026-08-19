export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: "#FDECEF",
          card: "#FFF3F5",
          border: "#FFCCD5",
          primary: "#FF6B8B",
          dark: "#682D3D",
          hover: "#FF4D73",
          light: "#FFF8F9",
        }
      },
      fontFamily: {
        cute: ['"Fredoka"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        cursive: ['"Caveat"', 'cursive'],
      },
      animation: {
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'heart-rise': 'heartRise 7s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartRise: {
          '0%': { transform: 'translateY(100vh) scale(0.6)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) scale(1.1)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}