module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Roboto Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'courier new',
          'monospace',
        ],
      },
      colors: {
        'text-primary': 'var(--color-on-surface)',
        'text-second': 'var(--second-color-text)',
        'card-bg': 'var(--color-surface-variant)',
        'button-variant': 'var(--button-variant)',
        'bg-card': 'var(--bg-card)',
        outline: 'var(--color-outline)',
        'text-variant': 'var(--color-surface-variant)',
        'text-strong': '#AD2680',
        'footer-bg': '#0F0F0F',
        'background-color': 'var(--color-surface)',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        spin: {
          '0%': {
            rotate: '0deg',
          },
          '15%, 35%': {
            rotate: '90deg',
          },
          '65%, 85%': {
            rotate: '270deg',
          },
          '100%': {
            rotate: '360deg',
          },
        },
        slide: {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
    },
  },
  backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic':
      'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
  ],
};
