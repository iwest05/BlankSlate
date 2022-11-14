import { Box, IconButton, useTheme } from '@mui/material';
import React from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

import Search from './components/Search';

type Props = {
   onMenuCollapse: () => void;
   open: boolean;
};

const Header = ({ onMenuCollapse, open }: Props) => {
   const theme = useTheme();

   const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.600' : 'grey.400';
   const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.900';
   return (
      <Box
         display={'flex'}
         pt={2.4}
         pb={2.4}
         pl={1.4}
         pr={1.4}
         justifyContent={'space-between'}
         bgcolor={'background.paper'}
         sx={{ width: '100%', height: 74, borderBottom: `1px solid ${theme.palette.divider}` }}
      >
         <Box display={'flex'} alignItems={'center'} sx={{ gap: 1 }}>
            <IconButton
               onClick={onMenuCollapse}
               sx={{
                  borderRadius: 1,
                  fontSize: '1.1rem',
                  fontWeight: '400',
                  padding: 1.3,
                  bgcolor: open ? iconBackColorOpen : iconBackColor,
                  color: 'grey.200',
                  '&:hover': {
                     bgcolor: 'grey.500',
                  },
               }}
            >
               {!onMenuCollapse ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </IconButton>
            <Search />
         </Box>
         <Box display={'flex'} pr={20}>
            <Box>
               <IconButton
                  onClick={() => alert('clicked')}
                  sx={{
                     bgcolor: '#121212',

                     borderRadius: 1,
                     '&:hover': {
                        bgcolor: 'rgb(140, 140, 140)',
                     },
                  }}
               >
                  <SettingsOutlinedIcon
                     fontSize={'small'}
                     sx={{
                        color: 'rgb(215, 215, 215)',
                     }}
                  />
               </IconButton>
            </Box>
         </Box>
      </Box>
   );
};

export default Header;
