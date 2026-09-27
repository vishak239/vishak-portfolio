import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#050505',
          elevated: '#0B0B0B',
          panel: '#111111',
          highlight: '#191919',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',
        },
        gold: {
          DEFAULT: '#C9A227',
          primary: '#C9A227',
          bright: '#E6C45A',
          dim: '#876D00',
          subtle: 'rgba(201, 162, 39, 0.12)',
          glow: 'rgba(201, 162, 39, 0.25)',
        },
        cinematic: {
          text: '#F5F1E8',
          muted: '#A9A39A',
          dim: '#6E6961',
          dark: '#050505',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        cinematic: '0.28em',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(201, 162, 39, 0.2)',
        'gold-subtle': '0 4px 20px rgba(201, 162, 39, 0.15)',
        'cinematic': '0 20px 50px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
