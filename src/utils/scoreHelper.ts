import { IFrame } from "../entities/Frame";

export function isLastFrame(frameIndex: number) {
  return frameIndex === 9;
}

export function isGameComplete(frames: IFrame[]) {
  return frames.every(isFrameComplete)

}

export function isFrameComplete(frame: IFrame) {
  return frame.first_shot !== null && (isStrike(frame) || frame.second_shot !== null);
}

export function isStrike(frame: IFrame) {
  return frame.first_shot === 10;
}

export function isSpare(frame: IFrame) {
  return Number(frame.first_shot) + Number(frame.second_shot) === 10;
}

export const isOpenFrame = (frame: IFrame) => {
  return !isSpare(frame) && !isStrike(frame);
}
