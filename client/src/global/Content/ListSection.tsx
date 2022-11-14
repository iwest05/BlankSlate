import { Collapse, ListItemButton } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

type Props = {
   title: string;
   sidebarClosed?: boolean;
   icon?: ReactElement;
};

const ListSection: React.FC<React.PropsWithChildren<Props>> = ({ title, icon, children, sidebarClosed }) => {
   const [toggleSection, setToggleSection] = useState(false);

   return (
      <>
         {!!sidebarClosed && <div className={'sidebar-closed-icons'}>{icon}</div>}
         {!sidebarClosed && (
            <>
               <ListItemButton
                  onClick={() => setToggleSection((s) => !s)}
                  sx={{
                     pr: 0,
                     mt: '10px',
                     '& span, svg': {
                        color: toggleSection ? 'rgb(48, 91, 221)' : 'rgb(191, 191, 191)',
                     },
                     '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                     },
                  }}
               >
                  <div className={'sidebar-open-icons'}>{icon}</div>
                  <>
                     <span className={'sidebar-open-menu-text'}>{title}</span>
                     <div className={'sidebar-menu-toggle'}>{toggleSection ? <MdExpandLess /> : <MdExpandMore />}</div>
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
