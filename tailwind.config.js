// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
    extend: {
      colors: {
        'primary-dark': '#0D1117',
        'text-primary': '#f2f2f2',
        'text-strong': '#AD2680',
        'footer-bg': '#161B22',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        meteor: 'meteor 5s linear infinite',
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
      },
    },
  },
  variants: {
    extend: {
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require('@tailwindcss/typography')],
};
