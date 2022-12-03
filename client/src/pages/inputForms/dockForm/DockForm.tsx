import React from 'react';
import { Box, Button, Card, Divider, Grid, InputLabel, Paper, Stack, Tooltip, Typography } from '@mui/material';
import BasicDatePicker from '../../../components/DatePicker';
import { IoInformationCircleSharp } from 'react-icons/io5';
import { CustomTextField } from '../../../theme/overrides/TextField';

const TransactionalMailForm = () => {
   const meterTooltip = 'TEST';
   const satoriTooltip = 'TEST';
   const moneyTooltip = 'TEST';
   const stampsTooltip = 'TEST';
   const inboundTooltip = 'TEST';
   const shipmentsTooltip = 'TEST';
   const sealedTooltip = 'TEST';
   const deliveriesTooltip = 'TEST';
   const packagesTooltip = 'TEST';
   return (
      <Card variant={'outlined'}>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item lg={12}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px 16px 0 16px'}>
                        <Grid item xs={12}>
                           <Typography variant={'h5'}>Dock</Typography>
                           <Divider />
                        </Grid>
                     </Grid>

                     <Grid container spacing={1}>
                        <Grid item lg={12}>
                           <Box display={'flex'}>
                              <Grid container spacing={1} padding={'16px'}>
                                 <Grid item lg={12} pb={1}>
                                    <InputLabel sx={{ mb: 1, opacity: 0.8 }}>Date:</InputLabel>
                                    <BasicDatePicker />
                                 </Grid>
                                 <Grid item lg={6}>
                                    <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                                       WH Meter:{' '}
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
                                       WH Money:{' '}
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
                                       Satori:{' '}
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
                                       Satori:{' '}
                                       <Tooltip title={moneyTooltip} placement="top">
                                          <span>
                                             <IoInformationCircleSharp size={'13px'} />
                                          </span>
                                       </Tooltip>
                                    </InputLabel>
                                    <CustomTextField />
                                 </Grid>
                              </Grid>

                              <Grid container spacing={1} padding={'16px'}>
                                 <Grid item lg={6}>
                                    <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                                       WH Meter:{' '}
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
                                       WH Money:{' '}
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
                                       Satori:{' '}
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
                                       Satori:{' '}
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
                                       test:{' '}
                                       <Tooltip title={moneyTooltip} placement="top">
                                          <span>
                                             <IoInformationCircleSharp size={'13px'} />
                                          </span>
                                       </Tooltip>
                                    </InputLabel>
                                    <CustomTextField />
                                 </Grid>
                                 <Grid item lg={6}>
                                    <Stack direction="row" justifyContent={'center'} spacing={2} sx={{ mt: 4 }}>
                                       <Button variant="outlined" color="secondary" onClick={() => alert()}>
                                          Cancel
                                       </Button>
                                       <Button variant="contained" sx={{ textTransform: 'none' }}>
                                          SUBMIT
                                       </Button>
                                    </Stack>
                                 </Grid>
                              </Grid>
                           </Box>
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};

export default TransactionalMailForm;
