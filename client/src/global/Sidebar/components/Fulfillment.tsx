import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import NewListItem from './ListItem';
import ListSection from './ListSection';

type Prop = {
  open: boolean
}

const Fulfillment = ({open}:Prop) => {
  return (
    <ListSection title={'Fulfillment Orders'} icon={<ShoppingCartOutlined />} sidebarClosed={!open}>
      <NewListItem title="Dock Orders" link="/fulfillment/dockorders" />
      <NewListItem title="Print Walk-Ups" link="/fulfillment/printorders" />
      <NewListItem title="Fulfillment Orders" link="/fulfillment/fulfillmentorders" />
    </ListSection>
  );
};

export default Fulfillment;