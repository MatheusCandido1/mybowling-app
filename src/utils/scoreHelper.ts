import { IFrame } from "../entities/Frame";

export function isStrike(frame: IFrame) {
  return frame.first_shot === 10;
}

export function isSpare(frame: IFrame) {
  return Number(frame.first_shot) + Number(frame.second_shot) === 10;
}

export const isOpenFrame = (frame: IFrame) => {
  return !isSpare(frame) && !isStrike(frame);
}
