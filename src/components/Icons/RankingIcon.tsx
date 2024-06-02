import React from "react";
import RankingSvg from "../../assets/icons/ranking.svg";

interface RankProps {
  height: number;
  width: number;
  color: string;
}

export function RankingIcon({height, width, color}: RankProps) {
  return (
    <RankingSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
