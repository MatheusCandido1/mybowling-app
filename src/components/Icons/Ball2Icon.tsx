import React from "react";
import Ball2Svg from "../../assets/icons/ball2.svg";

interface BallProps {
  height: number;
  width: number;
  color: string;
}

export function Ball2Icon({height, width, color}: BallProps) {
  return (
    <Ball2Svg
      width={width}
      height={height}
      color={color}
    />
  );
}
