import React from 'react';
import { FormOutlined } from '@ant-design/icons';
import NewListItem from './ListItem';
import ListSection from './ListSection';

type Props = {
  open: boolean
}

const CustomPrint = ({open}: Props) => {
  return (
    <ListSection title={'Custom Print Forms'} icon={<FormOutlined />} sidebarClosed={!open}>
      <NewListItem title="Black & White" link="/customform/black&white" />
      <NewListItem title="Color" link="/customform/colorform" />
      <NewListItem title="Shipping" link="/customform/shippingform" />
      <NewListItem title="Dock" link="/customform/dockform" />
    </ListSection>
  );
};

export default CustomPrint;