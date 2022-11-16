import React from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
   const theme = useTheme();
   return (
      <>
         <Box
            display={'flex'}
            borderRadius={1}
            bgcolor={'background.paper'}
            width={220}
            sx={{
               border: `1.6px solid ${theme.palette.secondary.dark}`,
               height: 30,
               '&:hover': {
                  borderColor: theme.palette.mode === 'dark' ? 'blue.400' : 'blue.400',
               },
            }}
         >
            <IconButton type={'button'} sx={{ p: 1 }}>
               <SearchOutlinedIcon sx={{ color: 'secondary.main', fontSize: 15 }} />
            </IconButton>
            <InputBase
               sx={{
                  width: 180,
                  flex: 1,
                  color: 'secondary.main',
                  fontSize: 13,
               }}
               placeholder={'Search'}
            />
         </Box>
      </>
   );
};

export default Search;
