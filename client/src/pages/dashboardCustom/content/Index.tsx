import React from 'react';
import { Box, Card, Chip, ChipProps, Color, Grid, PaletteColor, Stack, Typography, useTheme } from '@mui/material';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai';
import { ChipPropsColorOverrides, ChipTypeMap } from '@mui/material/Chip/Chip';
import { OverridableStringUnion } from '@mui/types';

interface Props {
   title: string;
   count: string;
   percentage?: number;
   isLoss?: boolean;
   extra: string;
}

const Index = ({ title, count, percentage, isLoss, extra }: Props) => {
   let itemColor: OverridableStringUnion<'error' | 'success'>;
   if (isLoss) {
      itemColor = 'error';
   } else {
      itemColor = 'success';
   }

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
                        color={itemColor}
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
               <>
                  {!isLoss && `We're up `}
                  {isLoss && `We're down `}
               </>
               <Typography component="span" variant="caption" sx={{ color: `${itemColor || 'primary'}.main` }}>
                  {extra}
               </Typography>{' '}
               this year
            </Typography>
         </Box>
      </Card>
   );
};

export default Index;
