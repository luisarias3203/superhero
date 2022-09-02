import { alpha, createTheme } from '@mui/material';
import { common } from '@mui/material/colors';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
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
    h3: {
      fontFamily: 'ObelixProBold',
      fontSize: 16,
      lineHeight: 2.18,
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
          boxShadow: 'none',
          letterSpacing: 0,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeMedium: {
          minWidth: '60px',
          padding: '1px 6px',
          textTransform: 'none',
          [breakpoints.up('md')]: {
            minWidth: '64px',
            padding: '4px 10px',
          },
        },
        sizeLarge: {
          borderRadius: 0,
          fontFamily: 'ObelixProBold',
          fontSize: 24,
          lineHeight: 1.4167,
          padding: '10px 32px',
        },
        containedSecondary: {
          color: common.white,
          '&:hover': {
            backgroundColor: '#EB6E1C',
          },
        },
        outlinedSecondary: {
          borderColor: '#EB6E1C',
        },
        startIcon: {
          marginLeft: 0,
          marginRight: '4px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
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
            maxWidth: 1350,
          },
        },
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
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: 55,
          [breakpoints.up('md')]: {
            minHeight: 115,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        dashed: {
          borderColor: '#E9E9E9',
          borderStyle: 'dashed',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: alpha(common.black, 0.85),
          marginBottom: 8,
          maxWidth: '100%',
          position: 'relative',
          transform: 'none',
          '&.Mui-focused': {
            color: alpha(common.black, 0.85),
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: `1px solid ${alpha(common.black, 0.15)}`,
          padding: '5px 12px',
          transition: 'border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:after, &:before': {
            display: 'none',
          },
          'label + &': {
            marginTop: 0,
          },
          '&.MuiNativeSelect-root': {
            color: alpha(common.black, 0.65),
          },
          '&.Mui-focused': {
            borderColor: common.black,
          },
        },
        input: {
          height: 'auto',
          lineHeight: 1.57,
          padding: 0,
          '&:placeholder': {
            color: alpha(common.black, 0.25),
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#91D5FF',
          height: 4,
          paddingBottom: 4,
          paddingTop: 4,
        },
        thumb: {
          backgroundColor: common.white,
          border: '2px solid #91D5FF',
          height: 14,
          width: 14,
          '&:hover': {
            borderColor: '#0084FF',
          },
        },
        track: {
          height: 4,
        },
        rail: {
          color: alpha(common.black, 0.15),
          height: 4,
        },
        valueLabel: {
          backgroundColor: '#595959',
          borderRadius: 4,
          fontSize: 14,
          lineHeight: 1.57,
          padding: '1px 8px',
          '&:before': {
            backgroundColor: '#595959',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          border: '1px solid #D9D9D9',
          borderRadius: '2px',
          margin: '1px',
        },
        inputRoot: {
          '&.MuiAutocomplete-inputRoot': {
            paddingBottom: '5px',
            paddingLeft: '12px',
          },
          '&.MuiInputBase-adornedStart': {
            paddingBottom: '4px',
            paddingLeft: '2px',
            paddingTop: '4px',
          },
          '& .MuiAutocomplete-input': {
            padding: 0,
          },
        },
        endAdornment: {
          right: '7px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3F3F3',
          height: 'auto',
          '& .MuiChip-deleteIcon': {
            color: alpha(common.black, 0.45),
            height: '11px',
            width: '11px',
          },
        },
        label: {
          fontSize: '12px',
          paddingLeft: '8px',
          paddingRight: '8px',
        },
      },
    },
  },
});

export default theme;
