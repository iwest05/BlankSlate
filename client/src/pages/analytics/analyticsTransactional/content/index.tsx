import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// ==============================|| CHART OPTIONS ||============================== //
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

interface Props {
   data: ApexAxisChartSeries;
}

function Index({ data }: Props) {
   const theme = useTheme();
   const mode = theme.palette.mode;
   const { primary, secondary } = theme.palette.text;
   const line = theme.palette.divider;

   const [series] = useState([...data]);
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
                  }
                  if (value > 999 && value < 999999) {
                     return Intl.NumberFormat().format(value / 1000) + ' K';
                  } else if (value > 999999) {
                     return Intl.NumberFormat().format(value / 100000) + ' M';
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

   return <ReactApexChart options={options} series={series} type={'area'} height={350} />;
}

export default Index;
