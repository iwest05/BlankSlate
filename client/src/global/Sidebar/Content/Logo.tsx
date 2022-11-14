import React from 'react';
import Lion from '../../../assets/Lion_Icon-01 Blue Text.png';
import { IconButton, Typography } from '@mui/material';
import '../../../index.css';

type Props = {
   sidebarClosed?: boolean;
};

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ sidebarClosed }) => {
   return (
      <div className={!sidebarClosed ? 'sidebar-open-logo' : 'sidebar-closed-logo'}>
         <IconButton sx={{ height: 63, width: 63 }} aria-label={'logo'}>
            <img className="logo" src={Lion} alt={'lion'} />
         </IconButton>
         <Typography pl={4} color={'secondary.main'} variant={'h5'} align={'center'} fontWeight={'bold'}>
            Print Data
         </Typography>
      </div>
   );
};

export default Logo;
