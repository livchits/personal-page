module.exports = {
  purge: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    extend: {
      colors: {
        canary: '#E5FA68',
      },
      width: {
        '12/25': '48%',
      },
    },
    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'Inconsolata',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    textIndent: {
      // defaults to {}
      1: '0.25rem',
      2: '0.5rem',
    },
    textShadow: {
      // defaults to {}
      default: '0 2px 5px rgba(0, 0, 0, 0.5)',
      lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
      none: 'none',
    },
    textDecorationStyle: {
      // defaults to these values
      solid: 'solid',
      double: 'double',
      dotted: 'dotted',
      dashed: 'dashed',
      wavy: 'wavy',
    },
    textDecorationColor: {
      // defaults to theme => theme('colors')
      red: '#f00',
      green: '#0f0',
      blue: '#00f',
    },
    fontVariantCaps: {
      // defaults to these values
      normal: 'normal',
      small: 'small-caps',
      'all-small': 'all-small-caps',
      petite: 'petite-caps',
      unicase: 'unicase',
      titling: 'titling-caps',
    },
    fontVariantNumeric: {
      // defaults to these values
      normal: 'normal',
      ordinal: 'ordinal',
      'slashed-zero': 'slashed-zero',
      lining: 'lining-nums',
      oldstyle: 'oldstyle-nums',
      proportional: 'proportional-nums',
      tabular: 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
    fontVariantLigatures: {
      // defaults to these values
      normal: 'normal',
      none: 'none',
      common: 'common-ligatures',
      'no-common': 'no-common-ligatures',
      discretionary: 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      historical: 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      contextual: 'contextual',
      'no-contextual': 'no-contextual',
    },
    textRendering: {
      // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision',
    },
    textStyles: (theme) => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      h1: {
        extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme('fontSize.5xl'),
        '@screen sm': {
          fontSize: theme('fontSize.6xl'),
        },
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
        '@screen sm': {
          fontSize: theme('fontSize.5xl'),
        },
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
      },
      h4: {
        extends: 'heading',
        fontSize: theme('fontSize.3xl'),
      },
      h5: {
        extends: 'heading',
        fontSize: theme('fontSize.2xl'),
      },
      h6: {
        extends: 'heading',
        fontSize: theme('fontSize.xl'),
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.blue.400'),
        '&:hover': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline',
        },
      },
      richText: {
        fontWeight: theme('fontWeight.normal'),
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.relaxed'),
        '> * + *': {
          marginTop: '1em',
        },
        h1: {
          extends: 'h1',
        },
        h2: {
          extends: 'h2',
        },
        h3: {
          extends: 'h3',
        },
        h4: {
          extends: 'h4',
        },
        h5: {
          extends: 'h5',
        },
        h6: {
          extends: 'h6',
        },
        ul: {
          listStyleType: 'disc',
        },
        ol: {
          listStyleType: 'decimal',
        },
        a: {
          extends: 'link',
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
        'i, em': {
          fontStyle: 'italic',
        },
      },
    }),
    animations: {
      // defaults to {}; the following are examples
      blink: {
        '0%': { opacity: 1 },
        '50%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animationDuration: {
      // defaults to these values
      default: '1s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationTimingFunction: {
      // defaults to these values
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    animationDelay: {
      // defaults to these values
      default: '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationIterationCount: {
      // defaults to these values
      default: 'infinite',
      once: '1',
      infinite: 'infinite',
    },
    animationDirection: {
      // defaults to these values
      default: 'normal',
      normal: 'normal',
      reverse: 'reverse',
      alternate: 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationFillMode: {
      // defaults to these values
      default: 'none',
      none: 'none',
      forwards: 'forwards',
      backwards: 'backwards',
      both: 'both',
    },
    animationPlayState: {
      // defaults to these values
      running: 'running',
      paused: 'paused',
    },
  },
  variants: {
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    textDecorationStyle: ['responsive'],
    textDecorationColor: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
    animations: ['responsive', 'hover', 'group-hover'],
    animationDuration: ['responsive', 'hover', 'group-hover'],
    animationTimingFunction: ['responsive', 'hover', 'group-hover'],
    animationDelay: ['responsive', 'hover', 'group-hover'],
    animationIterationCount: ['responsive', 'hover', 'group-hover'],
    animationDirection: ['responsive', 'hover', 'group-hover'],
    animationFillMode: ['responsive', 'hover', 'group-hover'],
    animationPlayState: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: 'c-', // the prefix to use for text style classes
    }),
    require('tailwindcss-animations'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeInDown'],
      settings: {
        animatedSpeed: 1000,
        animationDelaySpeed: 1000,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
};
