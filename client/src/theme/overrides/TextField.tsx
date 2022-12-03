import { TextField } from '@mui/material';
import React from 'react';

const CustomTextField = () => {
   return (
      <TextField
         size={'small'}
         placeholder="Number only*"
         fullWidth
         required
         sx={{
            mb: 1,
            '& .MuiOutlinedInput-root': {
               '& .MuiOutlinedInput-input': { opacity: 0.6 },
               '&:hover fieldset': {
                  borderColor: 'primary.main',
               },
               '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
               },
            },
         }}
      />
   );
};

export { CustomTextField };
