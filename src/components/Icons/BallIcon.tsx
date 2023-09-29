import React from "react";
import BallSvg from "../../assets/icons/ball.svg";

interface BallProps {
  height: number;
  width: number;
  color: string;
}

export function BallIcon({height, width, color}: BallProps) {
  return (
    <BallSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
