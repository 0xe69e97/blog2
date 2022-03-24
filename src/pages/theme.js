// import type { Theme } from 'theme-ui'

export const theme = {
  colors: {
    text: '#2b2d41',
    background: '#F9F8F3',
    lightText: '#D3D3D3',
    primary: '#9b59b6',
    accent: '#262931',
    highlight: '#9b59b6',
    secondary: '#67CC86',
    muted: '#A0B676',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      }
    }
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  styles: {
    h1: {
      fontSize: 32,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  }
}

// Demo

// export const theme = {
//   breakpoints: ['40em', '52em', '64em'],
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fonts: {
//     body:
//       'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading: 'inherit',
//     monospace: 'Menlo, monospace',
//   },
//   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
//   fontWeights: {
//     body: 400,
//     heading: 700,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//   },
//   colors: {
//     text: '#000',
//     background: '#fff',
//     primary: '#07c',
//     secondary: '#30c',
//     muted: '#f6f6f6',
//   },
//   text: {
//     heading: {
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//     },
//   },
//   styles: {
//     root: {
//       fontFamily: 'body',
//       lineHeight: 'body',
//       fontWeight: 'body',
//     },
//     h1: {
//       variant: 'text.heading',
//       fontSize: 5,
//     },
//     h2: {
//       variant: 'text.heading',
//       fontSize: 4,
//     },
//     h3: {
//       variant: 'text.heading',
//       fontSize: 3,
//     },
//     h4: {
//       variant: 'text.heading',
//       fontSize: 2,
//     },
//     h5: {
//       variant: 'text.heading',
//       fontSize: 1,
//     },
//     h6: {
//       variant: 'text.heading',
//       fontSize: 0,
//     },
//     pre: {
//       fontFamily: 'monospace',
//       overflowX: 'auto',
//       code: {
//         color: 'inherit',
//       },
//     },
//     code: {
//       fontFamily: 'monospace',
//       fontSize: 'inherit',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'separate',
//       borderSpacing: 0,
//     },
//     th: {
//       textAlign: 'left',
//       borderBottomStyle: 'solid',
//     },
//     td: {
//       textAlign: 'left',
//       borderBottomStyle: 'solid',
//     },
//   },
// }
