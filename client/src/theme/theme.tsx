import { ThemeProvider, createTheme, Shadows, ThemeOptions, StyledEngineProvider } from '@mui/material';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { CustomShadowProps, ThemeMode } from '../types/theme';

// types
type ThemeCustomizationProps = {
   children: ReactNode;
};

export default function ToggleColorMode({ children }: ThemeCustomizationProps) {
   const [mode, setMode] = useState<'light' | 'dark'>('dark');
   const colorMode = useMemo(
      () => ({
         toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
         },
      }),
      []
   );

   /*const theme: Theme = useMemo<Theme>(() => createTheme(Palette(mode)), [mode]);
   const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => CustomShadows(theme), [theme]);

   const themeOptions: ThemeOptions = useMemo(
      () => ({
         palette: theme.palette,
         customShadows: themeCustomShadows,
      }),
      [theme, themeCustomShadows]
   );

   const themes: Theme = createTheme(themeOptions);*/

   const getDesignTokens = (mode: PaletteMode) => ({
      palette: {
         mode: mode,
         common: {
            black: '#000',
            white: '#fff',
         },
         primary: {
            light: '#64b5f6',
            main: '#305bdd',
            dark: '#261CF9',
            contrastText: '#fff',
         },
         secondary: {
            light: '#e0e0e0',
            main: mode === 'dark' ? '#bebebe' : '#262626',
            dark: mode === 'dark' ? '#5b5b5b' : '#c3c3c3', // Box Boarders
            contrastText: '#fafafa',
         },
         error: {
            light: '#ef9a9a',
            main: '#ef5350',
            dark: '#d32f2f',
            contrastText: '#fff',
         },
         warning: {
            light: '#ffd54f',
            main: '#ffc107',
            dark: '#ffa000',
            contrastText: '#fafafa',
         },
         info: {
            light: '#4dd0e1',
            main: '#00bcd4',
            dark: '#0097a7',
            contrastText: '#fff',
         },
         success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: '#fff',
         },
         grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#1E1E1E',
            A100: '#f5f5f5',
            A200: '#eeeeee',
            A400: '#bdbdbd',
            A700: '#616161',
         },
         blue: {
            DEFAULT: '#2A669F',
            50: '#E4F7F8',
            100: '#CCEEF2',
            200: '#9CD7E5',
            300: '#6CB9D8',
            400: '#3B94CB',
            500: '#2A669F',
            600: '#234B83',
            700: '#1B3366',
            800: '#14204A',
            900: '#0C102E',
         },
         text: {
            primary: mode === 'dark' ? grey[100] : grey[900],
            secondary: mode === 'dark' ? grey[100] : grey[900],
            disabled: mode === 'dark' ? grey[900] : grey[400],
         },
         divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : grey[300],
         background: {
            paper: mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
            default: mode === 'dark' ? '#121212' : '#fafafb',
         },
      },
   });

   const theme: Theme = useMemo<Theme>(() => createTheme(getDesignTokens(mode)), [mode]);

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
   );
}
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Palette = (mode: ThemeMode) => ({
   palette: {
      mode: mode,
      common: {
         black: '#000',
         white: '#fff',
      },
      primary: {
         light: '#64b5f6',
         main: '#305bdd',
         dark: '#261CF9',
         contrastText: '#fff',
      },
      secondary: {
         light: '#e0e0e0',
         main: mode === 'dark' ? '#bebebe' : '#262626',
         dark: mode === 'dark' ? '#5b5b5b' : '#c3c3c3', // Box Boarders
         contrastText: '#fafafa',
      },
      error: {
         light: '#ef9a9a',
         main: '#ef5350',
         dark: '#d32f2f',
         contrastText: '#fff',
      },
      warning: {
         light: '#ffd54f',
         main: '#ffc107',
         dark: '#ffa000',
         contrastText: '#fafafa',
      },
      info: {
         light: '#4dd0e1',
         main: '#00bcd4',
         dark: '#0097a7',
         contrastText: '#fff',
      },
      success: {
         light: '#81c784',
         main: '#4caf50',
         dark: '#388e3c',
         contrastText: '#fff',
      },
      grey: {
         50: '#fafafa',
         100: '#f5f5f5',
         200: '#eeeeee',
         300: '#e0e0e0',
         400: '#bdbdbd',
         500: '#9e9e9e',
         600: '#757575',
         700: '#616161',
         800: '#424242',
         900: '#1E1E1E',
         A100: '#f5f5f5',
         A200: '#eeeeee',
         A400: '#bdbdbd',
         A700: '#616161',
      },
      text: {
         primary: mode === 'dark' ? grey[100] : grey[900],
         secondary: mode === 'dark' ? grey[100] : grey[900],
         disabled: mode === 'dark' ? grey[900] : grey[400],
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : grey[300],
      background: {
         paper: mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
         default: mode === 'dark' ? '#121212' : '#fafafb',
      },
   },
});
export const CustomShadows = (theme: Theme): CustomShadowProps => ({
   button: theme.palette.mode === 'dark' ? `0 2px 0 rgb(0 0 0 / 5%)` : `0 2px #0000000b`,
   text: `0 -1px 0 rgb(0 0 0 / 12%)`,
   z1:
      theme.palette.mode === 'dark'
         ? `0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%), 0px 1px 3px rgb(0 0 0 / 20%)`
         : `0px 1px 4px ${alpha(theme.palette.grey[900], 0.08)}`,
   primary: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
   secondary: `0 0 0 2px ${alpha(theme.palette.secondary.main, 0.2)}`,
   error: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
   warning: `0 0 0 2px ${alpha(theme.palette.warning.main, 0.2)}`,
   info: `0 0 0 2px ${alpha(theme.palette.info.main, 0.2)}`,
   success: `0 0 0 2px ${alpha(theme.palette.success.main, 0.2)}`,
   grey: `0 0 0 2px ${alpha(theme.palette.grey[500], 0.2)}`,
   primaryButton: `0 14px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
   secondaryButton: `0 14px 12px ${alpha(theme.palette.secondary.main, 0.2)}`,
   errorButton: `0 14px 12px ${alpha(theme.palette.error.main, 0.2)}`,
   warningButton: `0 14px 12px ${alpha(theme.palette.warning.main, 0.2)}`,
   infoButton: `0 14px 12px ${alpha(theme.palette.info.main, 0.2)}`,
   successButton: `0 14px 12px ${alpha(theme.palette.success.main, 0.2)}`,
   greyButton: `0 14px 12px ${alpha(theme.palette.grey[500], 0.2)}`,
});
