import { useState, Suspense } from 'react';
import Header from '../global/Header/Header';
import Sidebar from '../global/Sidebar/Sidebar';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

const MainLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(true);

   const handleMenuChange = () => {
      setSidebarOpen((s) => !s);
   };
   const mainWidth = sidebarOpen ? 'calc(100% - 248px)' : 'calc(100% - 80px)';
   return (
      <Box display={'flex'}>
         <Header onMenuCollapse={handleMenuChange} open={sidebarOpen} />
         <Sidebar open={sidebarOpen} />

         <>
            <Box component={'main'} sx={{ bgcolor: 'background.default', width: mainWidth, p: '24px' }}>
               <ErrorBoundary fallback={<div>Could Not Fetch Data</div>}>
                  <Suspense fallback={<div>Loading...</div>}>
                     <Container
                        maxWidth={'lg'}
                        sx={{
                           position: 'relative',
                           pt: '100px',
                           height: '100vh',
                           display: 'flex',
                           flexDirection: 'column',
                        }}
                     >
                        <Outlet />
                     </Container>
                  </Suspense>
               </ErrorBoundary>
            </Box>
         </>
      </Box>
   );
};

export default MainLayout;
