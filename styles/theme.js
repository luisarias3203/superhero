import { createTheme } from '@mui/material';
import { common } from '@mui/material/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 480,
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
      main: '#EB6E1C',
      light: '#F9873D',
    },
    grey: {
      A400: '#BFBFBF',
    },
    text: {
      primary: common.black,
    },
  },
  typography: {
    fontFamily: [
      'HelveticaNeueRegular',
      'HelveticaNeueBold',
      'ObelixProBold',
      'ObelixProRegular',
    ].join(','),
    h1: {
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
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          fontFamily: 'ObelixProBold',
          fontSize: 24,
          padding: '10px 32px',
          lineHeight: 1.4167,
        },
      },
    },
  },
});

export default theme;
