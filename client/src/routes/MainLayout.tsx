import { useState, Suspense, lazy } from 'react';
import Header from '../global/Header/Header';
import Sidebar from '../global/Sidebar/Sidebar';
import { Box, Container, Toolbar, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
const CustomDashboard = lazy(() => import('../pages/dashboards/dashboardCustom/DashboardCustom'));

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
            <Box
               component={'main'}
               sx={{
                  position: 'absolute',
                  right: '0px',
                  width: mainWidth,
                  p: '24px ',
               }}
            >
               <Toolbar />
               <ErrorBoundary fallback={<div>Could Not Fetch Data</div>}>
                  <Suspense fallback={<div>Loading...</div>}>
                     <Container
                        maxWidth={sidebarOpen ? 'lg' : 'xl'}
                        sx={{
                           pt: '80px',
                           display: 'flex',
                           flexDirection: 'column',
                           flexGrow: 1,
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
