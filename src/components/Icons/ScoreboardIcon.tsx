import React from "react";
import ScoreboardSvg from "../../assets/icons/scoreboard.svg";

interface ScoreboardProps {
  height: number;
  width: number;
  color: string;
}

export function ScoreboardIcon({height, width, color}: ScoreboardProps) {
  return (
    <ScoreboardSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
