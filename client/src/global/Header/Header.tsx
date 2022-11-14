import { Box, useTheme } from '@mui/material';
import React from 'react';
import ToggleSidebar from './components/ToggleSidebar';

type Props = {
   onMenuCollapse: () => void;
   open: boolean;
};

const Header = ({ onMenuCollapse, open }: Props) => {
   const theme = useTheme();

   const headerWidth = open ? 'calc(100% - 248px)' : 'calc(100% - 80px)';
   return (
      <Box
         display={'flex'}
         component={'header'}
         position={'fixed'}
         left={'auto'}
         right={'0px'}
         pt={2.4}
         pb={2.4}
         pl={1.4}
         pr={1.4}
         justifyContent={'space-between'}
         bgcolor={'background.paper'}
         zIndex={'1201'}
         sx={{ height: 74, borderBottom: `1px solid ${theme.palette.divider}`, width: headerWidth }}
      >
         <>
            <ToggleSidebar onMenuCollapse={onMenuCollapse} open={open} />
         </>
      </Box>
   );
};

export default Header;
