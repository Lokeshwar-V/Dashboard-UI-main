/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear',
        wiggle: 'wiggle 1s ease-in-out infinite',
        text: 'text 2s ease infinite',
        appear: 'delay .6s ease-out',
        'appear-1': 'delay .8s ease-out',
        'appear-2': 'delay 1s ease-out',
        'appear-4': 'delay 1.2s ease-out',
        'appear-6': 'delay 1.4s ease-out',
        disappear: 'disappear .4s ease-in',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        delay: {
          '0%': { scale: 0, opacity: 0 },
          '100%': { scale: 1, opacity: 1 }
        },
        disappear: {
          '0%': { scale: 1, opacity: 1 },
          '100%': { scale: 0, opacity: 0 }
        },
      }
    },
  },
  plugins: [],
}