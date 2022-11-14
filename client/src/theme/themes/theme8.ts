import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// ==============================|| PRESET THEME - PURPLE THEME8 ||============================== //

const Theme8 = (mode: PaletteMode): PaletteOptions => {

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

  let primaryColors = ['#c1d6d066', '#81c9b9', '#5bbda9', '#38b09c', '#1aa391', '#009688', '#007069', '#004a47', '#002424', '#000000'];
  let errorColors = ['#FDE8E7', '#F25E52', '#F04134', '#EE3B2F', '#E92A21'];
  let warningColors = ['#FFF7E0', '#FFC926', '#FFBF00', '#FFB900', '#FFA900'];
  let infoColors = ['#E0F4F5', '#26B0BA', '#00A2AE', '#009AA7', '#008694'];
  let successColors = ['#E0F5EA', '#26B56E', '#00A854', '#00A04D', '#008D3A'];

  if (mode === 'dark') {
    primaryColors = ['#1a2524', '#173331', '#15423e', '#11544e', '#0b6c63', '#058478', '#1a9686', '#37a996', '#59b8a5', '#7fc6b6'];
    errorColors = ['#321d1d', '#7d2e28', '#d13c31', '#e66859', '#f8baaf'];
    warningColors = ['#342c1a', '#836611', '#dda705', '#e9bf28', '#f8e577'];
    infoColors = ['#1a2628', '#11595f', '#058e98', '#1ea6aa', '#64cfcb'];
    successColors = ['#1a2721', '#115c36', '#05934c', '#1da65d', '#61ca8b'];
  }

  return {
    primary: {
      light: primaryColors[3],
      main: primaryColors[5],
      dark: primaryColors[6],
      contrastText
    },
    secondary: {
      light: greyColors[300],
      main: greyColors[500]!,
      dark: greyColors[700],
      contrastText: greyColors[50]
    },
    error: {
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      contrastText
    },
    warning: {
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      contrastText: greyColors[100]
    },
    info: {
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      contrastText
    },
    success: {
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      contrastText
    },
    grey: greyColors
  };
};

export default Theme8;
