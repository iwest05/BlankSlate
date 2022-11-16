import { ComponentClass, FunctionComponent } from 'react';

// material-ui
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type PresetColor =
   | 'default'
   | 'theme1'
   | 'theme2'
   | 'theme3'
   | 'theme4'
   | 'theme5'
   | 'theme6'
   | 'theme7'
   | 'theme8';

export type KeyedObject = {
   [key: string]: string | number | KeyedObject | any;
};

export type OverrideIcon =
   | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
     })
   | ComponentClass<any>
   | FunctionComponent<any>;

export interface GenericCardProps {
   title?: string;
   primary?: string | number | undefined;
   secondary?: string;
   content?: string;
   image?: string;
   dateTime?: string;
   iconPrimary?: OverrideIcon;
   color?: string;
   size?: string;
}
