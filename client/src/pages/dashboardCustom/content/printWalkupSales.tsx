import React from 'react';
import { Box, Card, Chip, ChipProps, Grid, Stack, Typography } from '@mui/material';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';

interface Props {
   title: string;
   count: string;
   percentage?: number;
   isLoss?: boolean;
   color?: ChipProps['color'];
   extra: string;
}

const PrintWalkUpSales = ({ color = 'primary', title, count, percentage, isLoss, extra }: Props) => {
   return (
      <Card>
         <Stack padding={'16px 16px 0px 16px'}>
            <Typography variant={'body2'} color={'secondary.main'}>
               {title}
            </Typography>
            <Grid container alignItems="center">
               <Grid item>
                  <Typography variant={'h6'} color={'text.primary'}>
                     {count}
                  </Typography>
               </Grid>
               {percentage && (
                  <Grid item>
                     <Chip
                        color={color}
                        icon={
                           <>
                              {!isLoss && <AiOutlineRise style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                              {isLoss && <AiOutlineFall style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                           </>
                        }
                        label={`${percentage}%`}
                        sx={{ ml: 1.25, pl: 1 }}
                        size="small"
                     />
                  </Grid>
               )}
            </Grid>
         </Stack>
         <Box sx={{ padding: '0px 16px 16px 16px' }}>
            <Typography variant="caption" color="textSecondary">
               We're up{' '}
               <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
                  {extra}
               </Typography>{' '}
               this year
            </Typography>
         </Box>
      </Card>
   );
};

export default PrintWalkUpSales;
