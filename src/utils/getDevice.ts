import { Platform } from 'react-native'

export function isIpad() {

  const isIpad = Platform.OS === 'ios' && Platform.isPad;
  return isIpad;
}
