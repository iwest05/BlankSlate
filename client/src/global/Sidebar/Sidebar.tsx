import React from 'react';
import Logo from './components/Logo';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import CustomPrint from './components/CustomPrint';
import Transactional from './components/Transactional';
import { Box, useTheme } from '@mui/material';
import Fulfillment from './components/Fulfillment';
type Props = {
   open: boolean;
};
const Sidebar = ({ open }: Props) => {
   const theme = useTheme();
   return (
      <Box
         component={'nav'}
         className={open ? 'sidebar-open' : 'sidebar-closed'}
         bgcolor={'background.paper'}
         display={'flex'}
         position={'fixed'}
         zIndex={'1300'}
         flexDirection={'column'}
         justifyContent={'space-between'}
         sx={{ borderRight: `1px solid ${theme.palette.divider}`, padding: '5px' }}
      >
         <Box>
            <Logo sidebarClosed={open} />
            <Dashboard open={open} />
            <Analytics open={open} />
            <CustomPrint open={open} />
            <Transactional open={open} />
            <Fulfillment open={open} />
         </Box>
         <>
            <ThemeToggle />
         </>
      </Box>
   );
};

export default Sidebar;
