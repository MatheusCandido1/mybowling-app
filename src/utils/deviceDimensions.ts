import { Dimensions } from "react-native";

export function height() {
  return Dimensions.get("window").height;
}

export const isDeviceSmall = height() < 700;

export const isDeviceSmallMedium = height() >= 700 && height() < 800;

export const isDeviceMedium = height() >= 800 && height() < 900;

export const isDeviceBig = height() > 900;
