import {
  isDeviceSmall,
  isDeviceMedium,
  isDeviceBig
 } from "./deviceDimensions"
import { isAndroid } from "./getOS"

export const NewGameModalHeight = () => {
  if(isDeviceSmall) return { dimension: 90,px: '90px' }
  if(isDeviceMedium) return { dimension: 200,px: '200px' }
  if(isDeviceBig) return { dimension: 280,px: '280px' }
}

export const FilterGamesModalHeight = () => {
  if(isAndroid) return { dimension: 320,px: '320px'};
  if(isDeviceSmall) return { dimension: 240,px: '240px' }
  if(isDeviceMedium) return { dimension: 380,px: '380px' }
  if(isDeviceBig) return { dimension: 450,px: '450px' }
}

export const NewGroupModalHeight = () => {
  if(isDeviceSmall) return { dimension: 230,px: '230px' }
  if(isDeviceMedium) return { dimension: 380,px: '380px' }
  if(isDeviceBig) return { dimension: 450,px: '450px' }
}

export const EditProfileModalHeight = () => {
  if(isDeviceSmall) return { dimension: 250,px: '250px' }
  if(isDeviceMedium) return { dimension: 400,px: '400px' }
  if(isDeviceBig) return { dimension: 475,px: '475px' }
}
