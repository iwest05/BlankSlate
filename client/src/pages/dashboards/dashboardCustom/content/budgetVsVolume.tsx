import React, { useEffect, useState, ChangeEvent } from 'react';
import cData from '../../../../data/custom.json';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
   Box,
   Card,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
   Grid,
   Paper,
   Stack,
   Typography,
   useMediaQuery,
} from '@mui/material';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart options
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
      width: [4, 6],
   },

   yaxis: [
      {
         title: {
            text: '$ (thousands)',
         },
      },
      {
         opposite: true,
      },
   ],
   fill: {
      opacity: 1,
   },
   tooltip: {
      y: {
         formatter: function (value: number) {
            if (value < 999) {
               return value;
            } else if (value > 999 && value < 999999) {
               return Intl.NumberFormat().format(value / 1000) + ' K';
            } else {
               return Intl.NumberFormat().format(value / 1000000) + ' M';
            }
         },
      },
   },
   legend: {
      labels: {
         colors: ['secondary.main'],
      },
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

// ==============================|| SALES COLUMN CHART ||============================== //

const BudgetVsVolume = () => {
   const theme = useTheme();
   const mode = theme.palette.mode;

   const [legend, setLegend] = useState({
      Impressions: true,
      Budget: true,
   });

   const { Impressions, Budget } = legend;

   const { primary, secondary } = theme.palette.text;
   const line = theme.palette.divider;

   const warning = theme.palette.warning.main;
   const primaryMain = theme.palette.primary.main;
   const successDark = theme.palette.success.dark;

   const initialSeries = [
      {
         name: 'Impressions',
         type: 'bar',
         data: cData.cdata.map((data) => data.impEnd),
      },
      {
         name: 'Budget Actual',
         type: 'line',
         data: cData.cdata.map((data) => data.budget),
      },
   ];

   const [series, setSeries] = useState(initialSeries);

   const handleLegendChange = (event: ChangeEvent<HTMLInputElement>) => {
      setLegend({ ...legend, [event.target.name]: event.target.checked });
   };

   const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
   const [options, setOptions] = useState<ChartProps>(columnChartOptions);

   useEffect(() => {
      if (Impressions && Budget) {
         setSeries(initialSeries);
      } else if (Impressions) {
         setSeries([
            {
               name: 'Impressions',
               type: 'bar',
               data: cData.cdata.map((data) => data.impEnd),
            },
         ]);
      } else if (Budget) {
         setSeries([
            {
               name: 'Budget Actual',
               type: 'line',
               data: cData.cdata.map((data) => data.budget),
            },
         ]);
      } else {
         setSeries([]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [Impressions, Budget]);

   useEffect(() => {
      setOptions((prevState) => ({
         ...prevState,
         colors: !(Impressions && Budget) && Budget ? [primaryMain] : [warning, primaryMain],
         xaxis: {
            categories: cData.cdata.map((data) => data.year),
            labels: {
               style: {
                  colors: [secondary, secondary, secondary, secondary, secondary, secondary],
               },
            },
         },
         yaxis: !(Impressions && Budget)
            ? [
                 {
                    tickAmount: 6,
                    labels: {
                       style: {
                          colors: [secondary],
                       },
                       formatter: function (value: number) {
                          if (value < 999) {
                             return value;
                          } else if (value > 999 && value < 999999) {
                             return Intl.NumberFormat().format(value / 1000) + 'K';
                          } else {
                             return Intl.NumberFormat().format(value / 1000000) + 'M';
                          }
                       },
                    },
                 },
              ]
            : [
                 {
                    tickAmount: 6,
                    labels: {
                       style: {
                          colors: [secondary],
                       },
                       formatter: function (value: number) {
                          if (value < 999) {
                             return value;
                          } else if (value > 999 && value < 999999) {
                             return Intl.NumberFormat().format(value / 1000) + 'K';
                          } else {
                             return Intl.NumberFormat().format(value / 1000000) + 'M';
                          }
                       },
                    },
                 },
                 {
                    tickAmount: 6,
                    opposite: true,
                    labels: {
                       style: {
                          colors: [secondary],
                       },
                       formatter: function (value: number) {
                          if (value < 999) {
                             return value;
                          } else if (value > 999 && value < 999999) {
                             return Intl.NumberFormat().format(value / 1000) + ' K';
                          } else {
                             return Intl.NumberFormat().format(value / 1000000) + ' M';
                          }
                       },
                    },
                 },
              ],

         grid: {
            borderColor: line,
         },
         markers: {
            size: 4,
         },
         tooltip: {
            theme: mode === 'dark' ? 'dark' : 'light',
         },
         plotOptions: {
            bar: {
               columnWidth: xsDown ? '60%' : '30%',
            },
         },
      }));
   }, [mode, primary, secondary, line, warning, primaryMain, successDark, Impressions, Budget, xsDown]);

   return (
      <Grid container spacing={3}>
         <Grid item xs={12} md={8} lg={8}>
            <Box display={'flex'} justifyContent={'space-between'}>
               <Box alignSelf={'center'}>
                  <Typography variant="body2">Budget vs Volume</Typography>
               </Box>
               <Box display="flex" justifyContent="flex-end">
                  <FormControl component="fieldset">
                     <FormGroup row>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 color="warning"
                                 checked={Impressions}
                                 size={'small'}
                                 onChange={handleLegendChange}
                                 name="Impressions"
                              />
                           }
                           label={<Typography variant={'body2'}>Impressions</Typography>}
                        />
                        <FormControlLabel
                           control={
                              <Checkbox checked={Budget} size={'small'} onChange={handleLegendChange} name="Budget" />
                           }
                           label={<Typography variant={'body2'}>Budget</Typography>}
                        />
                     </FormGroup>
                  </FormControl>
               </Box>
            </Box>
            <ReactApexChart options={options} series={series} type="line" height={280} />
         </Grid>
      </Grid>
   );
};

export default BudgetVsVolume;
