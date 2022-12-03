import React from 'react';
import {
   Button,
   Card,
   Divider,
   FormControl,
   FormControlLabel,
   Grid,
   InputLabel,
   MenuItem,
   Paper,
   Radio,
   RadioGroup,
   Select,
   Stack,
   Tooltip,
   Typography,
} from '@mui/material';
import { IoInformationCircleSharp } from 'react-icons/io5';
import BasicDatePicker from '../../../components/DatePicker';
import { CustomTextField } from '../../../theme/overrides/TextField';

const ShippingForm = () => {
   const initialsTooltip = 'TEST';
   const accountTooltip = 'TEST';
   const shipmentsTooltip = 'TEST';
   const stampsTooltip = 'TEST';

   const [initials, setInitials] = React.useState('');
   const [account, setAccount] = React.useState('');

   const initialsChange = (event: { target: { value: string } }) => {
      setInitials(event.target.value);
   };
   const accountChange = (event: { target: { value: string } }) => {
      setAccount(event.target.value);
   };

   return (
      <Card variant={'outlined'}>
         <Grid container spacing={2} padding={'16px'}>
            <Grid item xs={12} sm={12}>
               <Card raised={true}>
                  <Paper>
                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item xs={12}>
                           <Typography variant={'h5'}>Print Shipping</Typography>
                           <Divider />
                           <InputLabel sx={{ mb: 1, opacity: 0.8, mt: 2 }}>Date:</InputLabel>
                           <BasicDatePicker />
                        </Grid>
                     </Grid>

                     <Grid container spacing={1} padding={'16px'}>
                        <Grid item lg={3}>
                           {/* INITIALS */}
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Initials:{' '}
                              <Tooltip title={initialsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <FormControl required sx={{ mb: 2, minWidth: 180 }} size={'small'}>
                              <InputLabel sx={{ opacity: 0.3 }}>Initials</InputLabel>
                              <Select value={initials} onChange={initialsChange} autoWidth label="Initials">
                                 <MenuItem value={'LF'}>LF</MenuItem>
                                 <MenuItem value={'NM'}>NM</MenuItem>
                                 <MenuItem value={'MS'}>MS</MenuItem>
                                 <MenuItem value={'NS'}>NS</MenuItem>
                                 <MenuItem value={'DL'}>DL</MenuItem>
                                 <MenuItem value={'IW'}>IW</MenuItem>
                                 <MenuItem value={'DT'}>DT</MenuItem>
                              </Select>
                           </FormControl>
                           {/* ACCOUNT */}
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Account:{' '}
                              <Tooltip title={initialsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>

                           <FormControl required sx={{ mb: 2, minWidth: 180 }} size={'small'}>
                              <InputLabel sx={{ opacity: 0.3 }}>Account</InputLabel>
                              <Select value={account} onChange={accountChange} autoWidth label="Account">
                                 <MenuItem value={'631240'}>631240</MenuItem>
                                 <MenuItem value={'E75806'}>E75806</MenuItem>
                                 <MenuItem value={'8319R6'}>8319R6</MenuItem>
                                 <MenuItem value={'E75810'}>E75810</MenuItem>
                              </Select>
                           </FormControl>
                        </Grid>
                        <Grid item lg={3}>
                           {/* UPS SIDE 1 OR 2*/}
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Shipment Side:{' '}
                              <Tooltip title={initialsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <FormControl required sx={{ mb: 2, minWidth: 120 }}>
                              <RadioGroup
                                 row
                                 aria-labelledby="demo-row-radio-buttons-group-label"
                                 name="row-radio-buttons-group"
                              >
                                 <FormControlLabel value="1" control={<Radio size={'small'} />} label="Side 1" />
                                 <FormControlLabel value="2" control={<Radio size={'small'} />} label="Side 2" />
                              </RadioGroup>
                           </FormControl>
                           {/* DAY OR NIGHT SHIFT */}
                           <InputLabel sx={{ mb: 1, opacity: 0.8, pr: '10px' }}>
                              Work Shift:{' '}
                              <Tooltip title={initialsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>

                           <FormControl required sx={{ mb: 2, minWidth: 120 }}>
                              <RadioGroup
                                 row
                                 aria-labelledby="demo-row-radio-buttons-group-label"
                                 name="row-radio-buttons-group"
                              >
                                 <FormControlLabel value="Day" control={<Radio size={'small'} />} label="Day Shift" />
                                 <FormControlLabel
                                    value="Night"
                                    control={<Radio size={'small'} />}
                                    label="Night Shift"
                                 />
                              </RadioGroup>
                           </FormControl>
                        </Grid>
                        <Grid item lg={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Shipments:{' '}
                              <Tooltip title={shipmentsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Packages:{' '}
                              <Tooltip title={shipmentsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />
                        </Grid>
                        <Grid item lg={3}>
                           <InputLabel sx={{ mb: 1, opacity: 0.8 }}>
                              Shipments:{' '}
                              <Tooltip title={shipmentsTooltip} placement="top">
                                 <span>
                                    <IoInformationCircleSharp size={'13px'} />
                                 </span>
                              </Tooltip>
                           </InputLabel>
                           <CustomTextField />

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
                  </Paper>
               </Card>
            </Grid>
         </Grid>
      </Card>
   );
};

export default ShippingForm;
