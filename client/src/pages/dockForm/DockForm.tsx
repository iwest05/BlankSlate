import React from 'react';
import {
   Box,
   Button,
   Card,
   CardContent,
   Grid,
   Icon,
   InputLabel,
   Paper,
   Stack,
   TextField,
   Tooltip,
   Typography,
} from '@mui/material';
import { IoCloudUploadOutline, IoInformationCircleSharp } from 'react-icons/io5';
import BasicDatePicker from '../../components/DatePicker';

const DockForm = () => {
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
            <Grid item xs={12} sm={6}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>Date:</InputLabel>
                           <BasicDatePicker />
                        </Grid>
                     </Grid>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              WH Meter:{' '}
                              <Tooltip title={meterTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>

                           <TextField size={'small'} placeholder="Numbers only" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              WH Money:{' '}
                              <Tooltip title={satoriTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Satori:{' '}
                              <Tooltip title={moneyTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Stamps:{' '}
                              <Tooltip title={stampsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'39px 16px 16px 16px'}>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Inbound:{' '}
                              <Tooltip title={inboundTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Deliveries:{' '}
                              <Tooltip title={shipmentsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Shipments:{' '}
                              <Tooltip title={sealedTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Packages:{' '}
                              <Tooltip title={deliveriesTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Sealed:{' '}
                              <Tooltip title={packagesTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Numbers only"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Stack
                              direction="row"
                              spacing={2}
                              justifyContent="center"
                              alignItems="center"
                              sx={{ mt: 4 }}
                           >
                              <Button variant="outlined" color="secondary" onClick={() => alert()}>
                                 Cancel
                              </Button>
                              <Button variant="contained" sx={{ textTransform: 'none' }}>
                                 SUBMIT
                              </Button>
                           </Stack>
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};

export default DockForm;
