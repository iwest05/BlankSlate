import React from 'react';
import { MdOutlineAnalytics } from 'react-icons/md';
import NewListItem from './ListItem';
import ListSection from './ListSection';


type Props = {
  open: boolean;
};

const Analytics = ({open}:Props) => {
  return (
    <ListSection title={'Analytics'} icon={<MdOutlineAnalytics />} sidebarClosed={!open}>
      <NewListItem title="Custom" link="/analytics/custom" />
      <NewListItem title="Transactional" link="/analytics/transactional" />
    </ListSection>
  );
};

export default Analytics;