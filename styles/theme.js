import { createTheme } from '@mui/material';
import { common } from '@mui/material/colors';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1280,
      xl: 1440,
      xxl: 1600,
    },
  },
  palette: {
    primary: {
      main: '#0084FF',
      light: '#91D5FF',
    },
    secondary: {
      main: '#F9873D',
      light: '#EB6E1C',
    },
    text: {
      primary: common.black,
    },
  },
  spacing: 2,
  typography: {
    fontFamily: [
      'HelveticaNeueRegular',
      'HelveticaNeueBold',
      'ObelixProBold',
      'ObelixProRegular',
    ].join(','),
    h1: {
      fontFamily: 'ObelixProBold',
      fontSize: 25,
      lineHeight: 1.375,
      letterSpacing: 0,
      [breakpoints.up('lg')]: {
        fontSize: 40,
      },
    },
    h2: {
      fontFamily: 'ObelixProBold',
      fontSize: 20,
      lineHeight: 1.75,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: 'HelveticaNeueRegular',
      fontSize: 14,
      lineHeight: 1.5714,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: 'HelveticaNeueRegular',
      fontSize: 18,
      lineHeight: 1.333,
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: HelveticaNeueRegular;
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: local('HelveticaNeueRegular'),
            url(/fonts/typography/HelveticaNeueRegular.woff2) format('woff2');
        }
        @font-face {
          font-family: HelveticaNeueBold;
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: local('HelveticaNeueBold'),
            url(/fonts/typography/HelveticaNeueBold.woff2) format('woff2');
        }
        @font-face {
          font-family: ObelixProBold;
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: local('ObelixProBold'),
            url(/fonts/typography/ObelixProBold.woff2) format('woff2');
        }
        @font-face {
          font-family: ObelixProRegular;
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: local('ObelixProRegular'),
            url(/fonts/typography/ObelixProRegular.woff2) format('woff2');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: common.white,
          borderRadius: 0,
          boxShadow: 'none',
          fontFamily: 'ObelixProBold',
          fontSize: 24,
          lineHeight: 1.4167,
          letterSpacing: 0,
          padding: '10px 32px',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#EB6E1C',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          paddingLeft: 15,
          paddingRight: 15,
          [breakpoints.up('sm')]: {
            paddingLeft: 50,
            paddingRight: 50,
          },
          [breakpoints.up('lg')]: {
            paddingLeft: 30,
            paddingRight: 30,
          },
          [breakpoints.up('xl')]: {
            paddingLeft: 0,
            paddingRight: 0,
            maxWidth: 1200,
          },
        },
      },
    },
  },
});

export default theme;
