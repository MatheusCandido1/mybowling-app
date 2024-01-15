import {
  isDeviceSmall,
  isDeviceMedium,
  isDeviceSmallMedium,
  isDeviceBig
 } from "./deviceDimensions"
import { isAndroid } from "./getOS"

export const NewGameModalHeight = () => {
  if(isDeviceSmall) return { dimension: 90,px: '90px' }
  if(isDeviceSmallMedium) return { dimension: 150,px: '150px' }
  if(isDeviceMedium) return { dimension: 170,px: '170px' }
  if(isDeviceBig) return { dimension: 280,px: '280px' }
}

export const FilterGamesModalHeight = () => {
  if(isAndroid) return { dimension: 320,px: '320px'};
  if(isDeviceSmall) return { dimension: 240,px: '240px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 380,px: '380px' }
  if(isDeviceBig) return { dimension: 450,px: '450px' }
}

export const NewGroupModalHeight = () => {
  if(isDeviceSmall) return { dimension: 290,px: '290px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 435,px: '435px' }
  if(isDeviceBig) return { dimension: 500,px: '500px' }
}

export const EditProfileModalHeight = () => {
  if(isDeviceSmall) return { dimension: 250,px: '250px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 375,px: '375px' }
  if(isDeviceBig) return { dimension: 475,px: '475px' }
}

export const UpdatePasswordModalHeight = () => {
  if(isDeviceSmall) return { dimension: 395,px: '395px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 475,px: '425px' }
  if(isDeviceBig) return { dimension: 550,px: '550px' }
}

export const UpdateGroupModalHeight = () => {
  if(isDeviceSmall) return { dimension: 125,px: '125px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 300,px: '300px' }
  if(isDeviceBig) return { dimension: 375,px: '375px' }
}

export const FilterGamesByGroupModalHeight = () => {
  if(isDeviceSmall) return { dimension: 300,px: '300px' }
  if(isDeviceSmallMedium) return { dimension: 350,px: '350px' }
  if(isDeviceMedium) return { dimension: 400,px: '400px' }
  if(isDeviceBig) return { dimension: 500,px: '500px' }
}
