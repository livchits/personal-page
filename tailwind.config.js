module.exports = {
  purge: false,
  theme: {
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
      '1': '0.25rem',
      '2': '0.5rem',
    },
    textShadow: {
      // defaults to {}
      default: '0 2px 5px rgba(0, 0, 0, 0.5)',
      lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
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
  ],
};
