import MainLayout from './MainLayout';
import { lazy } from 'react';

const CustomDashboard = lazy(() => import('../pages/dashboards/dashboardCustom/DashboardCustom'));
const TransationalDashboard = lazy(() => import('../pages/dashboards/dashboardTransactional/DashboardTransactional'));
const CustomanAlytics = lazy(() => import('../pages/analytics/analyticsCustom/AnalyticsCustom'));
const TransationalAnalytics = lazy(() => import('../pages/analytics/analyticsTransactional/AnalyticsTransactional'));
const BlackAnWhitePrintForm = lazy(() => import('../pages/inputForms/bwPrintForm/BWPrintForm'));
const ColorForm = lazy(() => import('../pages/inputForms/colorPrintForm/ColorPrintForm'));
const ShippingForm = lazy(() => import('../pages/inputForms/shippingForm/ShippingForm'));
const DockForm = lazy(() => import('../pages/inputForms/dockForm/DockForm'));
const TransactionalPrintForm = lazy(() => import('../pages/inputForms/transactionalPrintForm/TransactionalPrintForm'));
const TransationalMainForm = lazy(() => import('../pages/inputForms/transactionalMailForm/TransactionalMailForm'));
const DockOrders = lazy(() => import('../pages/inputForms/dockOrders/DockOrders'));
const PrintOrders = lazy(() => import('../pages/inputForms/printOrders/PrintOrders'));
const FulfillmentOrders = lazy(() => import('../pages/inputForms/fulfillmentOrders/FulfillmentOrders'));

const MainRoutes = {
   path: '/',
   element: <MainLayout />,
   children: [
      {
         path: 'dashboard',
         children: [
            {
               path: 'custom',
               element: <CustomDashboard />,
            },
            {
               path: 'transactional',
               element: <TransationalDashboard />,
            },
         ],
      },
      {
         path: 'analytics',
         children: [
            {
               path: 'custom',
               element: <CustomanAlytics />,
            },
            {
               path: 'transactional',
               element: <TransationalAnalytics />,
            },
         ],
      },
      {
         path: 'customform',
         children: [
            {
               path: 'black&white',
               element: <BlackAnWhitePrintForm />,
            },
            {
               path: 'colorform',
               element: <ColorForm />,
            },
            {
               path: 'shippingform',
               element: <ShippingForm />,
            },
            {
               path: 'dockform',
               element: <DockForm />,
            },
         ],
      },
      {
         path: 'transactional',
         children: [
            {
               path: 'print',
               element: <TransactionalPrintForm />,
            },
            {
               path: 'mail',
               element: <TransationalMainForm />,
            },
         ],
      },
      {
         path: 'fulfillment',
         children: [
            {
               path: 'dockorders',
               element: <DockOrders />,
            },
            {
               path: 'printorders',
               element: <PrintOrders />,
            },
            {
               path: 'fulfillmentorders',
               element: <FulfillmentOrders />,
            },
         ],
      },
   ],
};

export default MainRoutes;
