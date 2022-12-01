import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import Index from './content';
import { transImpressions } from '../../data/transactionalData/transImpressions';
import { envelopes } from '../../data/transactionalData/envelopes';
import { flats } from '../../data/transactionalData/flats';
import { halfFolds } from '../../data/transactionalData/halfFolds';
import { overSided } from '../../data/transactionalData/overSided';
import { triFolds } from '../../data/transactionalData/triFolds';

const AnalyticsTransactional = () => {
   return (
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
         {/* row 1 */}
         <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Transactional Analytics</Typography>
         </Grid>
         {/* row 2 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Impressions</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={transImpressions} />
               </Box>
            </Card>
         </Grid>
         {/* row 3 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Envelopes</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={envelopes} />
               </Box>
            </Card>
         </Grid>
         {/* row 4 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Flats</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={flats} />
               </Box>
            </Card>
         </Grid>
         {/* row 5 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Half Folds</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={halfFolds} />
               </Box>
            </Card>
         </Grid>
         {/* row 6 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Tri Folds</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={triFolds} />
               </Box>
            </Card>
         </Grid>
         {/* row 7 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Over-Sized Policies</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={overSided} />
               </Box>
            </Card>
         </Grid>
      </Grid>
   );
};

export default AnalyticsTransactional;
