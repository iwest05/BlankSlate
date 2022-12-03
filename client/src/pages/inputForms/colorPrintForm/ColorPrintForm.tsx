import React from 'react';
import { Box, Button, Card, Divider, Grid, InputLabel, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { IoInformationCircleSharp } from 'react-icons/io5';
import BasicDatePicker from '../../../components/DatePicker';

import { CustomTextField } from '../../../theme/overrides/TextField';

/*const CustomTextField = styled((props: TextFieldProps)=> (
  <TextField
))*/

const DockForm = () => {
   const meterTooltip = 'TEST';
   const satoriTooltip = 'TEST';
   const moneyTooltip = 'TEST';
   const stampsTooltip = 'TEST';
   const inboundTooltip = 'TEST';
   const shipmentsTooltip = 'TEST';
   const sealedTooltip = 'TEST';
   const deliveriesTooltip = 'TEST';
   return (
      <Card variant={'outlined'}>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item md={6}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12}>
                           <Typography variant={'h5'}>iGen 3</Typography>
                           <Divider />
                           <InputLabel sx={{ mb: 1, opacity: 0.8, mt: 2 }}>Date:</InputLabel>
                           <BasicDatePicker />
                        </Grid>
                     </Grid>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Color:{' '}
                              <Tooltip title={meterTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>

                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Black:{' '}
                              <Tooltip title={satoriTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              L Color:{' '}
                              <Tooltip title={moneyTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              XL Color:{' '}
                              <Tooltip title={stampsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
            <Grid item md={6}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12}>
                           <Typography variant={'h5'}>iGen 4</Typography>
                           <Divider />
                           <InputLabel sx={{ mb: 1, opacity: 0.8, mt: 2 }}>Date:</InputLabel>
                           <BasicDatePicker />
                        </Grid>
                     </Grid>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Color:{' '}
                              <Tooltip title={inboundTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Black:{' '}
                              <Tooltip title={shipmentsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              L Color:{' '}
                              <Tooltip title={sealedTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              XL Color:{' '}
                              <Tooltip title={deliveriesTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
         </Grid>

         <Grid container spacing={1} padding={'8px 16px 16px 16px'}>
            <Grid item sm={12}>
               <Paper>
                  <Grid
                     container
                     spacing={1}
                     padding={'16px'}
                     direction="row"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <Box pr={1}>
                        <Button variant="outlined" color="secondary" onClick={() => alert()}>
                           Cancel
                        </Button>
                     </Box>
                     <Box pl={1}>
                        <Button variant="contained" sx={{ textTransform: 'none' }}>
                           SUBMIT
                        </Button>
                     </Box>
                  </Grid>
               </Paper>
            </Grid>
         </Grid>
      </Card>
   );
};

export default DockForm;
