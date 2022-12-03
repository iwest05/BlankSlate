import { useRoutes } from 'react-router-dom';

// project import

import MainRoutes from './MainRoutes';
import MainLayout from './MainLayout';
import { lazy } from 'react';
const CustomDashboard = lazy(() => import('../pages/dashboards/dashboardCustom/DashboardCustom'));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
   return useRoutes([
      {
         path: '/',
         element: <MainLayout />,
         children: [
            {
               path: 'custom',
               element: <CustomDashboard />,
            },
         ],
      },
      MainRoutes,
   ]);
}
