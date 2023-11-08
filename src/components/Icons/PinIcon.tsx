import React from "react";
import PinSvg from "../../assets/icons/pin.svg";

interface PinProps {
  height: number;
  width: number;
  color: string;
}

export function PinIcon({height = 30, width = 30, color}: PinProps) {
  return (
    <PinSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
