import {
  isDeviceSmall,
  isDeviceMedium,
  isDeviceBig
 } from "./deviceDimensions"

export const NewGameModalHeight = () => {

  if(isDeviceSmall) return { dimension: 90,px: '90px' }
  if(isDeviceMedium) return { dimension: 200,px: '200px' }
  if(isDeviceBig) return { dimension: 280,px: '280px' }
}
