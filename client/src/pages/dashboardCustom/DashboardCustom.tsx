import React from 'react';
// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';
import TotalImpressions from './content/totalImpressions';
import FulfillmentSales from './content/fulfillmentSales';
import PrintWalkUpSales from './content/printWalkupSales';
import CpvVsActual from './content/cpvVsActual';
import BudgetVsVolume from './content/budgetVsVolume';

const DashboardCustom = () => {
   return (
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
         {/* row 1 */}
         <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Dashboard</Typography>
         </Grid>
         <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="body2">Year: 2022 vs 2021</Typography>
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={4}>
            <TotalImpressions
               title="Impressions"
               count="15,524,426"
               percentage={120}
               color={'success'}
               extra="2,498,743"
            />
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={4}>
            <FulfillmentSales
               title="Fulfillment Sales"
               count="$76,462"
               percentage={384}
               color={'success'}
               extra="$56,569"
            />
         </Grid>
         <Grid item xs={12} sm={6} md={4} lg={4}>
            <PrintWalkUpSales
               title="Print Walk-Up Sales"
               count="$346,078"
               percentage={27.4}
               color="success"
               extra="$238,393"
            />
         </Grid>

         <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
         <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
         {/* row 2 */}
         <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="body2">CPV vs Actual</Typography>
               </Grid>
            </Grid>
            <Card sx={{ mt: 1.5 }}>
               <Box sx={{ pt: 1, pr: 2 }}>
                  <CpvVsActual />
               </Box>
            </Card>
         </Grid>
         {/*<Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
               <Grid item>
                  <Typography variant="h5"></Typography>
               </Grid>
               <Grid item />
            </Grid>
         </Grid>*/}
         {/* row 3 */}
         <Grid item xs={12} md={12} lg={12}>
            <BudgetVsVolume />
         </Grid>
      </Grid>
   );
};

export default DashboardCustom;
