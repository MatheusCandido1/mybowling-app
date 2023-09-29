import React from "react";
import ProfileSvg from "../../assets/icons/profile.svg";

interface ProfileProps {
  height: number;
  width: number;
  color: string;
}

export function ProfileIcon({height, width, color}: ProfileProps) {
  return (
    <ProfileSvg
      width={width}
      height={height}
      color={color}
    />
  );
}
