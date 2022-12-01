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

const BWPrintForm = () => {
   const meterTooltip = 'TEST';
   const satoriTooltip = 'TEST';
   const moneyTooltip = 'TEST';
   const stampsTooltip = 'TEST';

   return (
      <Card variant={'outlined'}>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item xs={12} sm={12}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12} sm={6}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>Date:</InputLabel>
                           <BasicDatePicker />
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

                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12} sm={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Meter A:{' '}
                              <Tooltip title={meterTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>

                           <TextField
                              size={'small'}
                              placeholder="Printer 84"
                              fullWidth
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Meter E:{' '}
                              <Tooltip title={satoriTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Printer 84"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Meter A:{' '}
                              <Tooltip title={moneyTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Printer 94"
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Meter E:{' '}
                              <Tooltip title={stampsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <TextField
                              size={'small'}
                              sx={{ '& .MuiOutlinedInput-input': { opacity: 0.6 } }}
                              placeholder="Printer 94"
                              fullWidth
                           />
                        </Grid>
                     </Grid>
                  </Paper>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};

export default BWPrintForm;
