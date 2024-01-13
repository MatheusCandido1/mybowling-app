import { View } from "react-native";

import {
  isDeviceSmall,
  isDeviceMedium,
  isDeviceBig
 } from "../../../utils/deviceDimensions"

interface SeparatorProps {
  height: number;
  device?: 'small' | 'medium' | 'large';
}

export function Separator({ height, device }: SeparatorProps) {


  if(device === 'small' && isDeviceSmall) {
    return (<View style={{ height}} />
    )
  } else {
    return (<View style={{ height }} />)
  }

}
