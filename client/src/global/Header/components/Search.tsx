import React from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Search = () => {
  const theme = useTheme()
  return (
    <>
      <Box
        display={'flex'}
        borderRadius={1}
        bgcolor={'background.paper'}
        width={220}
        sx={{
          border: `1.5px solid ${theme.palette.secondary.main}`,
          height: 30,
          '&:hover': {
            borderColor: '#003A70',
          },
        }}
      >
        <IconButton type={'button'} sx={{ p: 1 }}>
          <SearchOutlinedIcon sx={{ color: '#D7D7D7', fontSize: 15 }} />
        </IconButton>
        <InputBase
          sx={{
            width: 180,
            flex: 1,
            color: '#D7D7D7',
            fontSize: 13,
          }}
          placeholder={'Search'}
        />
      </Box>
    </>
  );
};

export default Search;