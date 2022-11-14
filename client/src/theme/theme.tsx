import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

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
            main: mode === 'dark' ? '#b9b9b9': '#262626',
            dark: '#616161',
            contrastText: '#fafafa',
         },
         error: {
            light: '#ef9a9a',
            main: '#ef5350',
            dark: '#d32f2f',
            contrastText: '#fff',
         },
         warning: {
            light: "#ffd54f",
            main: "#ffc107",
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
            900: '#0C102E'
         },
         text: {
            primary: mode === 'dark' ? alpha(grey[900]!, 0.87) : grey[700],
            secondary: mode === 'dark' ? alpha(grey[900]!, 0.45) : grey[500],
            disabled: mode === 'dark' ? alpha(grey[900]!, 0.1) : grey[400],
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
