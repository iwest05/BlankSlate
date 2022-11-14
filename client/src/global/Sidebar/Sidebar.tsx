import React from 'react';
import Logo from './Content/Logo';
import ListSection from './Content/ListSection';
import NewListItem from './Content/ListItem';
import { FormOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineAnalytics, MdOutlineMarkunreadMailbox } from 'react-icons/md';
import ThemeToggle from './Content/ThemeToggle';
import { Box, useTheme } from '@mui/material';
type Props = {
   open: boolean;
};
const Sidebar = ({ open }: Props) => {
   const theme = useTheme();
   return (
      <Box
         className={open ? 'sidebar-open' : 'sidebar-closed'}
         bgcolor={'background.paper'}
         display={'flex'}
         flexDirection={'column'}  justifyContent={'space-between'}
         sx={{ borderRight: `1px solid ${theme.palette.divider}`, padding: '5px' }}
      >
         <Box>
            <Logo sidebarClosed={!open} />
            <ListSection title={'Dashboard'} icon={<AiOutlineDashboard />} sidebarClosed={!open}>
               <NewListItem title="Custom" link="/dashboard/custom" />
               <NewListItem title="Transactional" link="/dashboard/transactional" />
            </ListSection>
            <ListSection title={'Analytics'} icon={<MdOutlineAnalytics />} sidebarClosed={!open}>
               <NewListItem title="Custom" link="/analytics/custom" />
               <NewListItem title="Transactional" link="/analytics/transactional" />
            </ListSection>
            <ListSection title={'Custom Print Forms'} icon={<FormOutlined />} sidebarClosed={!open}>
               <NewListItem title="Black & White" link="/customform/black&white" />
               <NewListItem title="Color" link="/customform/colorform" />
               <NewListItem title="Shipping" link="/customform/shippingform" />
               <NewListItem title="Dock" link="/customform/dockform" />
            </ListSection>
            <ListSection title={'Transactional Forms'} icon={<MdOutlineMarkunreadMailbox />} sidebarClosed={!open}>
               <NewListItem title="Print" link="/transactional/print" />
               <NewListItem title="Mail" link="/transactional/mail" />
            </ListSection>
            <ListSection title={'Fulfillment Orders'} icon={<ShoppingCartOutlined />} sidebarClosed={!open}>
               <NewListItem title="Dock Orders" link="/fulfillment/dockorders" />
               <NewListItem title="Print Walk-Ups" link="/fulfillment/printorders" />
               <NewListItem title="Fulfillment Orders" link="/fulfillment/fulfillmentorders" />
            </ListSection>
         </Box>
         <>
            <ThemeToggle />
         </>
      </Box>
   );
};

export default Sidebar;
