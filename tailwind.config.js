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
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        meteor: 'meteor 5s linear infinite',
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
            overflow: 'hidden',
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
  plugins: [require('@tailwindcss/typography')],
};
