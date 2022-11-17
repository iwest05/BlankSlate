import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
   Box,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
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
      width: 8,
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

// ==============================|| SALES COLUMN CHART ||============================== //

const DashboardCustom = () => {
   const theme = useTheme();
   const mode = theme.palette.mode;

   const [legend, setLegend] = useState({
      income: true,
      cos: true,
   });

   const { income, cos } = legend;

   const { primary, secondary } = theme.palette.text;
   const line = theme.palette.divider;

   const warning = theme.palette.warning.main;
   const primaryMain = theme.palette.primary.main;
   const successDark = theme.palette.success.dark;

   const initialSeries = [
      {
         name: 'Income',
         type: 'bar',
         data: [180, 90, 135, 114, 120, 145],
      },
      {
         name: 'Cost Of Sales',
         type: 'line',
         data: [120, 45, 78, 150, 168, 99],
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
               name: 'Income',
               type: 'bar',
               data: [180, 90, 135, 114, 120, 145],
            },
         ]);
      } else if (cos) {
         setSeries([
            {
               name: 'Cost Of Sales',
               type: 'line',
               data: [120, 45, 78, 150, 168, 99],
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
               style: {
                  colors: [secondary, secondary, secondary, secondary, secondary, secondary],
               },
            },
         },
         yaxis: [
            {
               labels: {
                  style: {
                     colors: [secondary],
                  },
                  formatter: function (value: number) {
                     if (value < 1000) {
                        return value;
                     } else if (value > 999) {
                        return Intl.NumberFormat().format(value / 1000) + 'K';
                     }
                  },
               },
            },
            {
               opposite: true,
               labels: {
                  style: {
                     colors: [secondary],
                  },
                  formatter: function (value: number) {
                     if (value < 1000) {
                        return value;
                     } else if (value > 999) {
                        return Intl.NumberFormat().format(value / 1000) + 'K';
                     }
                  },
               },
            },
         ],
         grid: {
            borderColor: line,
         },
         tooltip: {
            theme: mode === 'dark' ? 'dark' : 'light',
         },
         /*plotOptions: {
            bar: {
               columnWidth: xsDown ? '60%' : '30%',
            },
         },*/
      }));
   }, [mode, primary, secondary, line, warning, primaryMain, successDark, income, cos, xsDown]);

   return (
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
                     control={<Checkbox color="warning" checked={income} onChange={handleLegendChange} name="income" />}
                     label="Income"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={cos} onChange={handleLegendChange} name="cos" />}
                     label="Cost of Sales"
                  />
               </FormGroup>
            </FormControl>
         </Stack>
         <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={360} />
         </div>
      </Box>
   );
};

export default DashboardCustom;
