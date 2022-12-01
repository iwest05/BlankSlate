import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { impression } from '../../data/customData/impression';
import Index from './content';
import { leadHours } from '../../data/customData/leadHours';
import { jobCounts } from '../../data/customData/jobCounts';
import { colorImpressions } from '../../data/customData/colorImpressions';
import { bwImpressions } from '../../data/customData/bwImpressions';
import { uspsMail } from '../../data/customData/uspsMail';
import { dockDeliveries } from '../../data/customData/dockDeliveries';
import { printWalkups } from '../../data/customData/printWalkups';
import { fulfillmentSales } from '../../data/customData/fullfillmentSales';

const AnalyticsCustom = () => {
   return (
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
         {/* row 1 */}
         <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Custom Analytics</Typography>
         </Grid>
         {/* row 2 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Job Counts Average</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={jobCounts} />
               </Box>
            </Card>
         </Grid>
         {/* row 3 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Lead Hours</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={leadHours} />
               </Box>
            </Card>
         </Grid>
         {/* row 4 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Impressions</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={impression} />
               </Box>
            </Card>
         </Grid>
         {/* row 5 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Color Impressions</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={colorImpressions} />
               </Box>
            </Card>
         </Grid>
         {/* row 6 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Black & White Impressions</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={bwImpressions} />
               </Box>
            </Card>
         </Grid>
         {/* row 7 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">USPS Mail Counts</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={uspsMail} />
               </Box>
            </Card>
         </Grid>
         {/* row 8 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Dock Internal Deliveries</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={dockDeliveries} />
               </Box>
            </Card>
         </Grid>
         {/* row 9 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Print Walk-Up Sales</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={printWalkups} />
               </Box>
            </Card>
         </Grid>
         {/* row 10 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">Fulfillment Sales</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <Index data={fulfillmentSales} />
               </Box>
            </Card>
         </Grid>
      </Grid>
   );
};

export default AnalyticsCustom;
