import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem'
      
    },
    screens: {
      sm: '660px',
      md: '760px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#16213F',
        secondary: '#050D28',
        lighted: '#EFEFEF',
        lightedYellow: '#F2E69D',
        blue: {
          DEFAULT: '#336DFF',
          hover: '#4d80ff' 
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config