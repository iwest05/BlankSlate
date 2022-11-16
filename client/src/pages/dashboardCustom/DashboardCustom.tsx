import React, { ChangeEvent, useEffect, useState } from 'react';
import {
   Box,
   Card,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
   Stack,
   Typography,
   useMediaQuery,
   useTheme,
} from '@mui/material';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const columnChartOptions = {
   chart: {
      type: 'line',
      height: 430,
      toolbar: {
         show: false,
      },
   },
   plotOptions: {
      bar: {
         columnWidth: '30%',
         borderRadius: 4,
      },
   },
   dataLabels: {
      enabled: false,
   },
   stroke: {
      show: true,
      width: 8,
      colors: ['transparent'],
   },
   xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
   },
   yaxis: {
      title: {
         text: '$ (thousands)',
      },
   },
   fill: {
      opacity: 1,
   },
   tooltip: {
      y: {
         formatter(val: number) {
            return `$ ${val} thousands`;
         },
      },
   },
   legend: {
      show: false,
   },
   responsive: [
      {
         breakpoint: 600,
         options: {
            yaxis: {
               show: false,
            },
         },
      },
   ],
};

const DashboardCustom = () => {
   const theme = useTheme();
   const mode = theme.palette.mode;

   const [legend, setLegend] = useState({
      income: true,
      cos: true,
   });

   const { primary, secondary } = theme.palette.text;
   const line = theme.palette.divider;

   const warning = theme.palette.warning.main;
   const primaryMain = theme.palette.primary.main;
   const successDark = theme.palette.success.dark;

   const { income, cos } = legend;

   const initialSeries = [
      {
         name: 'Impressions',
         type: 'bar',
         data: [69993596, 29230105, 15222927, 14753399],
      },
      {
         name: 'Budget Actual',
         type: 'line',
         data: [4761678, 3281068, 3272705, 2838645],
      },
   ];

   const [series, setSeries] = useState(initialSeries);

   const handleLegendChange = (event: ChangeEvent<HTMLInputElement>) => {
      setLegend({ ...legend, [event.target.name]: event.target.checked });
   };

   const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
   const [options, setOptions] = useState<ChartProps>(columnChartOptions);

   useEffect(() => {
      if (income && cos) {
         setSeries(initialSeries);
      } else if (income) {
         setSeries([
            {
               name: 'Impressions',
               type: 'bar',
               data: [69993596, 29230105, 15222927, 14753399],
            },
         ]);
      } else if (cos) {
         setSeries([
            {
               name: 'Budget Actual',
               type: 'line',
               data: [4761678, 3281068, 3272705, 2838645],
            },
         ]);
      } else {
         setSeries([]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [income, cos]);

   useEffect(() => {
      setOptions((prevState) => ({
         ...prevState,
         colors: !(income && cos) && cos ? [primaryMain] : [warning, primaryMain],
         xaxis: {
            labels: {
               style: {
                  colors: [secondary, secondary, secondary, secondary, secondary, secondary],
               },
            },
         },
         yaxis: {
            labels: {
               style: {
                  colors: [secondary],
               },
            },
         },
         grid: {
            borderColor: line,
         },
         tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
         },
         plotOptions: {
            bar: {
               columnWidth: xsDown ? '60%' : '30%',
            },
         },
      }));
   }, [mode, primary, secondary, line, warning, successDark, income, cos, xsDown]);

   return (
      <Card variant={'outlined'}>
         <Box sx={{ p: 2.5, pb: 0 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
               <Stack spacing={1.5}>
                  <Typography variant="h6" color="secondary">
                     Net Profit
                  </Typography>
                  <Typography variant="h4">$1560</Typography>
               </Stack>
               <FormControl component="fieldset">
                  <FormGroup row>
                     <FormControlLabel
                        control={
                           <Checkbox color="warning" checked={income} onChange={handleLegendChange} name="income" />
                        }
                        label="Income"
                     />
                     <FormControlLabel
                        control={<Checkbox checked={cos} onChange={handleLegendChange} name="cos" />}
                        label="Cost of Sales"
                     />
                  </FormGroup>
               </FormControl>
            </Stack>
            <div id={'chart'}>
               <ReactApexChart options={options} series={series} type={'line'} height={360} />
            </div>
         </Box>
      </Card>
   );
};

export default DashboardCustom;
