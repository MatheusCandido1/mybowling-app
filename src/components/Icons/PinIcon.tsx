import React from "react";
import PinSvg from "../../assets/icons/pin.svg";

interface PinProps {
  height: number;
  width: number;
  color: string;
}

export function PinIcon({height, width, color}: PinProps) {
  return (
    <PinSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
