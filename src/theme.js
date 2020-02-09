const rangeOfThrees = [ 0, 3, 6, 12, 15, 18, 21, 24, 27, 30, 33, 36 ]

export default {
  fonts: {
    body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: 'inherit'
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  colors: {
    light: '#fffefe',
    dark: 'rgb(51, 51, 51)',
    darkBlue: '#2f4146',
  },
  radii: rangeOfThrees,
  space: rangeOfThrees,
  text: {},
  styles: {
    root: {
      fontFamily: 'body',
      height: '100vh',
      p: 5
    }
  }
}