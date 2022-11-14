import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import NewListItem from './ListItem';
import ListSection from './ListSection';


type Props = {
  open: boolean;
};

const Dashboard = ({ open }: Props) => {
  return (
    <ListSection title={'Dashboard'} icon={<AiOutlineDashboard />} sidebarClosed={!open}>
      <NewListItem title="Custom" link="/dashboard/custom" />
      <NewListItem title="Transactional" link="/dashboard/transactional" />
    </ListSection>
  );
};

export default Dashboard;