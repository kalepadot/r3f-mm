/**
 * @file tailwind.config.js
 * Theme colors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
 */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        // accent0: '#df5cb8',
        // accent1: '#6957AF',
        // accent2: '#9B5CFF',
        // accent3: '#3F0298',
        // accent4: '#D9731B',
        // accent5: '#A04DB9',
        accent0: '#3BBA9C',
        accent1: '#2E3047',
        accent2: '#43455C',
        accent3: '#3C3F58',
        accent4: '#707793',
        accent5: '#303444',
        accent6: '#9F51F6',
        accent7: '#4F4598',
        black: '#000000',
        white: '#fff',
        gray: {
          ...colors.gray,
          10: '#101010',
          22: '#222326',
          17: '#171717',
          '1d': '#1d1d1d',
          f2: '#f2f2f2',
          91: '#919496',
          40: '#404040',
          98: '#989898',
          '6e': '#6E6E6E',
        },
        pink: {
          ...colors.pink,
          fa: '#FA1FB6',
        },
        purple: {
          ...colors.purple,
          '00': '#001440',
          b7: '#B765D7',
          77: '#7773E1',
        },
        orange: {
          ...colors.orange,
          ff: '#FF8300',
          ec: '#ec7a00',
        },
        yellow: {
          ff: '#FFB600',
        },
        green: {
          '0e': '#0ef1b3',
          '2f': '#2FFFE7',
          '3f': '#34FFE7',
        },
        red: {
          ...colors.red,
          f5: '#F52513',
          c8: '#C80000',
          ff: '#FF0003',
          ea: '#EA281E',
        },
        blue: {
          ...colors.blue,
          '02': '#02003E',
          '04': '#04347A',
          '2d': '#2D4DC8',
        },
      },
      borderRadius: {
        ms: '0.25rem',
      },
      dropShadow: {
        discord: '0px 4px 12px #5865F2',
        discordHover: '0px 2px 8px #5865F2',
        purple: '0px 4px 12px #5865F2',
        purpleHover: '0px 2px 8px #5865F2',
        hotPink: '0px 4px 12px #C8287A',
        hotPinkHover: '0px 2px 8px #C8287A',
        teal: '0px 4px 12px #2CFEFE',
        tealHover: '0px 2px 8px #2CFEFE',
        red: '0px 0px 3px red',
      },
      fontFamily: {
        sans: ['NeueMontreal-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        pp: ['PPSupplyMono', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xxs: '.625rem',
      },
      gap: {
        6: '-1.5rem',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
      },
      width: {
        profile: '1200px',
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
      },
      zIndex: {
        '-1': '-10',
        100: 100,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        slider: 100,
        menu: 1000,
        cursor: 1100,
        infinity: 9999999999,
      },
    },
    screens: {
      xs: '480px',
      sm: '500px',
      md: [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { min: '668px', max: '767px' },
        { min: '868px' },
      ],
      lg: '1200px',
      xl: '1600px',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
