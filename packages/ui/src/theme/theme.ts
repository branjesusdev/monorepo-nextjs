'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#de2887',
      contrastText: '#ffffff',
      light: '#f7d4eb',
      dark: '#a2005c',
    },
    secondary: {
      main: '#1f5278',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
  components: {
    MuiCssBaseline : {
      
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'var(--ui-primary)', // Color personalizado
          '&.Mui-checked': {
            color: 'var(--radio-bg)', // Color cuando está seleccionado
          },
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)', // Color de fondo al hacer hover
          },
          fill: 'var(--radio-bg)', // Color personalizado
        },
        colorSecondary: {
          '&.Mui-checked': {
            color: 'var(--radio-bg)', // Color cuando está seleccionado
          },
        },
      },
    },
  },
});

export default theme;
