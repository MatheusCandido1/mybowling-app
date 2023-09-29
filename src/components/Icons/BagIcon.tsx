import React from "react";
import BagSvg from "../../assets/icons/bag.svg";

interface BagProps {
  height: number;
  width: number;
  color: string;
}

export function BagIcon({height, width, color}: BagProps) {
  return (
    <BagSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
