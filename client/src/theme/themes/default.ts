// types
import { PaletteColorOptions } from '@mui/material/styles';
import {amber, blue, cyan, green, red} from "@mui/material/colors";


// ==============================|| PRESET THEME - DEFAULT ||============================== //


const Default = () => {
  const greyColors: PaletteColorOptions = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
  const contrastText = '#fff';

  return {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[600],
      contrastText
    },
    secondary: {
      light: greyColors[300],
      main: greyColors[500]!,
      dark: greyColors[700],
      contrastText: greyColors[50]
    },
    error: {
      light: red[200],
      main: red[400],
      dark: red[700],
      contrastText
    },
    warning: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: greyColors[100]
    },
    info: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
      contrastText
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText
    },
    grey: greyColors
  };
};

export default Default;
