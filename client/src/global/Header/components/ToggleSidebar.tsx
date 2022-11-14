import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import Search from './Search';

type Props = {
  onMenuCollapse: () => void;
  open: boolean;
};

const ToggleSidebar = ({ onMenuCollapse, open }: Props) => {
  const theme = useTheme()
  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.600' : 'grey.400';
  const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.200';
  return (
    <Box display={'flex'} alignItems={'center'} sx={{ gap: 1 }}>
      <IconButton
        onClick={onMenuCollapse}
        sx={{
          borderRadius: 1,
          fontSize: '1.1rem',
          fontWeight: '400',
          padding: 1.3,
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          color: theme.palette.mode === 'dark' ? 'grey.200': 'secondary.main',
          '&:hover': {
            bgcolor: 'grey.500',
          },
        }}
      >
        {!onMenuCollapse ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </IconButton>
      <Search />
    </Box>
  );
};

export default ToggleSidebar;