import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// chart options
const areaChartOptions = {
   chart: {
      height: 450,
      type: 'area',
      toolbar: {
         show: false,
      },
   },
   dataLabels: {
      enabled: false,
   },
   stroke: {
      curve: 'smooth',
      width: 2,
   },
   legend: {
      labels: {
         colors: ['secondary.main'],
      },
   },
   grid: {
      strokeDashArray: 0,
   },
   inverseOrder: true,
};

// ==============================|| INCOME AREA CHART ||============================== //

const CpvVsActual = () => {
   const theme = useTheme();
   const mode = theme.palette.mode;

   const { primary, secondary } = theme.palette.text;
   const line = theme.palette.divider;

   const [options, setOptions] = useState<ChartProps>(areaChartOptions);

   useEffect(() => {
      setOptions((prevState) => ({
         ...prevState,
         xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
               style: {
                  colors: [
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                     secondary,
                  ],
               },
            },
            axisBorder: {
               show: true,
               color: line,
            },
            tickAmount: 11,
         },
         yaxis: {
            labels: {
               style: {
                  colors: [secondary],
               },
               formatter: function (value: number) {
                  if (value < 999) {
                     return value;
                  } else if (value > 999 && value < 999999) {
                     return Intl.NumberFormat().format(value / 1000) + 'K';
                  }
               },
            },
         },
         grid: {
            borderColor: line,
         },
         tooltip: {
            theme: mode === 'dark' ? 'dark' : 'light',
            shared: true,
         },
         plotOptions: {
            dataLabels: {
               enable: true,
               style: {
                  colors: ['secondary.main'],
               },
            },
         },
      }));
   }, [mode, primary, secondary, line, theme]);

   const [series, setSeries] = useState([
      {
         name: 'Page Views',
         data: [0, 86, 28, 115, 48, 210, 136],
      },
      {
         name: 'Sessions',
         data: [0, 43, 14, 56, 24, 105, 68],
      },
   ]);

   useEffect(() => {
      setSeries([
         {
            name: 'Actual',
            data: [44345, 39615, 57237, 63409, 63475, 58358, 66617, 82104, 91803, 100104, 72273, 72273],
         },
         {
            name: 'CPV',
            data: [53459, 53448, 46472, 50898, 50898, 47542, 52221, 45747, 55727, 64584, 57021, 55126],
         },
      ]);
   }, []);

   return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

export default CpvVsActual;
