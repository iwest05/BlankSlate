import React, { ReactElement, useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ColorModeContext } from '../../../theme/theme';


const ThemeToggle = () => {
   const theme = useTheme();
   const colorMode = useContext(ColorModeContext);
   const hover = theme.palette.mode === 'dark' ? 'grey.800': 'grey.400'
   return (
      <>
         <Box pr={1}>
            <IconButton
               onClick={colorMode.toggleColorMode}
               color={'secondary'}
               size={'small'}
               sx={{
                  minWidth: '100%',
                  bgcolor: 'background.default',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                     bgcolor: hover,
                  },
               }}
            >
               {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
         </Box>
      </>
   );
};

export default ThemeToggle;
