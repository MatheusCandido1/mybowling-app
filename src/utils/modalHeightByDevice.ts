import {
  isDeviceSmall,
  isDeviceMedium,
  isDeviceSmallMedium,
  isDeviceBig
 } from "./deviceDimensions"
import { isAndroid } from "./getOS"
import { isIpad } from "./getDevice"

export const NewGameModalHeight = () => {
  if(isIpad()) return { dimension: 750, px: '750px' }
  if(isDeviceSmall) return { dimension: 80,px: '80px' }
  if(isDeviceSmallMedium) return { dimension: 150,px: '150px' }
  if(isDeviceMedium) return { dimension: 190,px: '190px' }
  if(isDeviceBig) return { dimension: 270,px: '270px' }
}

export const MembersDetailsModalHeight = () => {
  if(isIpad()) return { px: '950px' }
  if(isDeviceSmall) return { px: '300px' }
  if(isDeviceSmallMedium) return { px: '370px' }
  if(isDeviceMedium) return { px: '450px' }
  if(isDeviceBig) return { px: '540px' }
}

export const InvitesModalHeight = () => {
  if(isIpad()) return { px: '980px' }
  if(isDeviceSmall) return { px: '300px' }
  if(isDeviceSmallMedium) return { px: '370px' }
  if(isDeviceMedium) return { px: '450px' }
  if(isDeviceBig) return { px: '540px' }
}

export const EditGameModalHeight = () => {
  if(isIpad()) return { px: '770px' }
  if(isDeviceSmall) return { px: '90px' }
  if(isDeviceSmallMedium) return { px: '160px' }
  if(isDeviceMedium) return { px: '250px' }
  if(isDeviceBig) return { px: '330px' }
}

export const GamesFilterModalHeight = () => {
  if(isIpad()) return { px: '930px' }
  if(isAndroid) return { px: '120px'};
  if(isDeviceSmall) return { px: '250px' }
  if(isDeviceSmallMedium) return { px: '315px' }
  if(isDeviceMedium) return { px: '390px' }
  if(isDeviceBig) return { px: '470px' }
}

export const NewGroupModalHeight = () => {
  if(isIpad()) return { px: '980px' }
  if(isDeviceSmall) return { px: '300px' }
  if(isDeviceSmallMedium) return { px: '370px' }
  if(isDeviceMedium) return { px: '450px' }
  if(isDeviceBig) return { px: '525px' }
}

export const EditProfileModalHeight = () => {
  if(isIpad()) return { px: '895px' }
  if(isDeviceSmall) return { px: '215px' }
  if(isDeviceSmallMedium) return { px: '280px' }
  if(isDeviceMedium) return { px: '375px' }
  if(isDeviceBig) return { px: '445px' }
}

export const UpdatePasswordModalHeight = () => {
  if(isIpad()) return { px: '940px' }
  if(isDeviceSmall) return { px: '280px' }
  if(isDeviceSmallMedium) return { px: '340px' }
  if(isDeviceMedium) return { px: '425px' }
  if(isDeviceBig) return { px: '500px' }
}

export const UpdateGroupModalHeight = () => {
  if(isIpad()) return { px: '850px' }
  if(isDeviceSmall) return { px: '125px' }
  if(isDeviceSmallMedium) return { px: '200px' }
  if(isDeviceMedium) return { px: '300px' }
  if(isDeviceBig) return { px: '375px' }
}

export const FilterGamesByGroupModalHeight = () => {
  if(isIpad()) return { px: '960px' }
  if(isDeviceSmall) return { px: '280px' }
  if(isDeviceSmallMedium) return { px: '350px' }
  if(isDeviceMedium) return { px: '400px' }
  if(isDeviceBig) return { px: '500px' }
}

export const AverageHistoryModalHeight = () => {
  if(isIpad()) return { px: '825px' }
  if(isDeviceSmall) return { px: '140px' }
  if(isDeviceSmallMedium) return { px: '210px' }
  if(isDeviceMedium) return { px: '300px' }
  if(isDeviceBig) return { px: '390px' }
}

export const ArsenalModalHeight = () => {
  if(isIpad()) return {  px: '750px' }
  if(isDeviceSmall) return { px: '65px' }
  if(isDeviceSmallMedium) return { px: '135px' }
  if(isDeviceMedium) return { px: '225px' }
  if(isDeviceBig) return { px: '305px' }
}
