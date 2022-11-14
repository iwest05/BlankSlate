import MainLayout from './MainLayout';
import { lazy } from 'react';

const CustomDashboard = lazy(() => import('../pages/DashboardCustom'));
const TransationalDashboard = lazy(() => import('../pages/DashboardTransactional'));
const CustomanAlytics = lazy(() => import('../pages/AnalyticsCustom'));
const TransationalAnalytics = lazy(() => import('../pages/AnalyticsTransactional'));
const BlackAnWhitePrintForm = lazy(() => import('../pages/BWPrintForm'));
const ColorForm = lazy(() => import('../pages/ColorPrintForm'));
const ShippingForm = lazy(() => import('../pages/ShippingForm'));
const DockForm = lazy(() => import('../pages/DockForm'));
const TransactionalPrintForm = lazy(() => import('../pages/TransactionalPrintForm'));
const TransationalMainForm = lazy(() => import('../pages/TransactionalMailForm'));
const DockOrders = lazy(() => import('../pages/DockOrders'));
const PrintOrders = lazy(() => import('../pages/PrintOrders'));
const FulfillmentOrders = lazy(() => import('../pages/FulfillmentOrders'));

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
