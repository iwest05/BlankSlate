import { useState } from 'react';
import Header from '../global/Header/Header';
import Sidebar from '../global/Sidebar/Sidebar';
import { Box } from '@mui/material';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuChange = () => {
    setSidebarOpen((s) => !s);
  };

  return (
    <>
      <Box position={'fixed'} display={'flex'} width={'100%'}>
        <Sidebar open={sidebarOpen} />
        <Header onMenuCollapse={handleMenuChange} open={sidebarOpen}/>
      </Box>
      <>
        <div className={sidebarOpen ? 'body' : 'bodyclose'}>
          {/*<Box sx={{ bgcolor: 'rgb(18, 18, 18)', height: '500in' }}>
            <Outlet />
          </Box>*/}
        </div>
      </>
    </>
  );
};

export default MainLayout;
