import React from 'react';
import { Box, Button, Card, Grid, Icon, InputLabel, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { IoCloudUploadOutline, IoInformationCircleSharp } from 'react-icons/io5';
import BasicDatePicker from '../../components/DatePicker';

const DockForm = () => {
   const whTooltip =
      'alskdnfaol;sndfoansdo;fanods;fnao;sdnfao;sndf;aosndf;aolndsfasldnfadsnfaokjdsnfa;lksndf;alknsdfl;kna';
   return (
      <Card>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item xs={12} sm={6} padding={'16px'}>
               <Card>
                  <Grid container spacing={1} padding={'16px'}>
                     <Grid item xs={12}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>Date:</InputLabel>
                        <BasicDatePicker />
                     </Grid>
                  </Grid>
                  <Grid container spacing={1} padding={'16px'}>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6, pr: '10px' }}>
                           WH Meter:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>

                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           WH Money:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Satori:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Stamps:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                  </Grid>
               </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Card>
                  <Grid container spacing={1} padding={'39px 16px 16px 16px'}>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Inbound:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Deliveries:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Shipments:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Packages:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ mb: 1, opacity: 0.6 }}>
                           Sealed:{' '}
                           <Tooltip title={whTooltip} placement="top">
                              <span>
                                 <IoInformationCircleSharp size={'13px'} />
                              </span>
                           </Tooltip>
                        </InputLabel>
                        <TextField
                           size={'small'}
                           sx={{ '& .MuiOutlinedInput-input': { opacity: 0.5 } }}
                           placeholder="Numbers only"
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <Stack direction="row" spacing={2} justifyContent="left" alignItems="center" sx={{ mt: 5 }}>
                           <Button variant="outlined" color="secondary" onClick={() => alert()}>
                              Cancel
                           </Button>
                           <Button variant="contained" sx={{ textTransform: 'none' }}>
                              Add new Product
                           </Button>
                        </Stack>
                     </Grid>
                  </Grid>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};

export default DockForm;
