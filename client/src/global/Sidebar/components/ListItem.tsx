import { List, ListItemButton } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
   title: string;
   link?: string;
};

const StyledLink = styled(Link)`
   display: block;
   text-decoration: none;
`;

const ListItem: FC<PropsWithChildren<Props>> = ({ title, link }) => {
   return (
      <List component="div" disablePadding>
         <StyledLink to={link || '#'}>
            <ListItemButton
               sx={{
                  pl: 8,
                 color: 'secondary.main',
                 '&:hover': {
                   bgcolor: 'divider',
                 },
               }}
            >
               <span>{title}</span>
            </ListItemButton>
         </StyledLink>
      </List>
   );
};

export default ListItem;
