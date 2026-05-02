import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:        '#F5EDE0',
        'cream-light':'#FAF6EE',
        navy:         '#1E2A4A',
        'navy-deep':  '#141D35',
        'red-accent': '#C0392B',
        gold:         '#C8A84B',
        'gold-light': '#E8C97A',
        'batik-blue': '#2D3561',
        'coffee-brown':'#6B3F1F',
        'warm-tan':   '#C4965A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'steam': 'steamRise 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':       { transform: 'scale(1.6)', opacity: '0.5' },
        },
        steamRise: {
          '0%':   { strokeDashoffset: '300', opacity: '0' },
          '20%':  { opacity: '0.3' },
          '70%':  { opacity: '0.15' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
