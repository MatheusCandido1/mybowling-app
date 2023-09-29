import React from "react";
import HomeSvg from "../../assets/icons/home.svg";

interface HomeProps {
  height: number;
  width: number;
  color: string;
}

export function HomeIcon({height, width, color}: HomeProps) {
  return (
    <HomeSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
