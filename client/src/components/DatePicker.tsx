import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';

export default function BasicDatePicker() {
   const defaultValue = format(new Date(), 'MM/dd/yyyy');
   const [value, setValue] = React.useState<Dayjs | null>(dayjs(defaultValue));

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
            mask="__/__/____"
            value={value}
            onChange={(newValue) => {
               setValue(newValue);
            }}
            renderInput={(params) => <TextField defaultValue={defaultValue} size={'small'} {...params} />}
         />
      </LocalizationProvider>
   );
}
