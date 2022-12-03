import React from 'react';
import { Card, Grid, Paper } from '@mui/material';

type Props = {
   /*title: string;
  sidebarClosed?: boolean;
  icon?: ReactElement;*/
};

export const CustomCard: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
   return (
      <Card variant={'outlined'}>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item lg={12}>
               <Card raised={true}>
                  <Paper>{children}</Paper>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};
