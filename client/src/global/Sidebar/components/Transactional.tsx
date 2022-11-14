import React from 'react';
import { MdOutlineMarkunreadMailbox } from 'react-icons/md';
import NewListItem from './ListItem';
import ListSection from './ListSection';

type Prop = {
  open: boolean
}

const Transactional = ({open}: Prop) => {
  return (
    <ListSection title={'Transactional Forms'} icon={<MdOutlineMarkunreadMailbox />} sidebarClosed={!open}>
      <NewListItem title="Print" link="/transactional/print" />
      <NewListItem title="Mail" link="/transactional/mail" />
    </ListSection>
  );
};

export default Transactional;