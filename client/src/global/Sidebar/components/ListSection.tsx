import { Box, Collapse, IconButton, ListItemButton, Popper, useTheme } from '@mui/material';
import React, { ReactElement, useContext, useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { ColorModeContext } from '../../../theme/theme';

type Props = {
   title: string;
   sidebarClosed?: boolean;
   icon?: ReactElement;
};

const ListSection: React.FC<React.PropsWithChildren<Props>> = ({ title, icon, children, sidebarClosed }) => {
   const theme = useTheme();
   const hover = theme.palette.mode === 'dark' ? 'grey.800' : 'grey.400';
   const [toggleSection, setToggleSection] = useState(false);
   return (
      <>
         {!!sidebarClosed && (
            <Box fontSize={'25px'} mt={'15px'}>
               <IconButton
                  color={'secondary'}
                  sx={{
                     borderRadius: 1,
                     minWidth: '100%',
                     '&:hover': {
                        bgcolor: hover,
                     },
                  }}
               >
                  {icon}
               </IconButton>
            </Box>
         )}
         {!sidebarClosed && (
            <>
               <ListItemButton
                  onClick={() => setToggleSection((s) => !s)}
                  sx={{
                     borderRadius: 1,
                     pr: 0,
                     mt: '10px',
                     '& span, svg': {
                        color: toggleSection ? 'primary.main' : 'secondary.main',
                     },
                     '&:hover': {
                        bgcolor: 'divider',
                     },
                  }}
               >
                  <Box alignItems={'center'} display={'flex'} margin={0} position={'relative'} fontSize={'20px'}>
                     {icon}
                  </Box>
                  <>
                     <Box component="span" padding={'0 15px'} m={0} position={'relative'} fontSize={'1.0rem'}>
                        {title}
                     </Box>
                     <Box display={'flex'} marginLeft={'auto'} fontSize={'1.5rem'}>
                        {toggleSection ? <MdExpandLess /> : <MdExpandMore />}
                     </Box>
                  </>
               </ListItemButton>

               <Collapse in={toggleSection} timeout="auto" unmountOnExit>
                  {children}
               </Collapse>
            </>
         )}
      </>
   );
};

export default ListSection;
