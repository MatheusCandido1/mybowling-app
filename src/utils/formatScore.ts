import { IFrame } from "../entities/Frame";


export const formatFrameFirstShot = (currentFrame: IFrame) => {
  if(currentFrame.first_shot === null) {
    return '';
  }
  if(currentFrame.first_shot === 10) {
    return 'X';
  }
  if(currentFrame.first_shot === 0) {
    return '-';
  }
  return currentFrame.first_shot.toString();
}

export const formatFrameSecondShot = (currentFrame: IFrame) => {
  if(currentFrame.frame_number === 10) {
    if(currentFrame.second_shot === 10) return 'X';

  } else {
    if(currentFrame.first_shot === null) return ''
    if(currentFrame.second_shot === null) return '';

    if((currentFrame.first_shot + currentFrame.second_shot) === 10) {
      return '/';
    }
    if(currentFrame.second_shot === 0) {
      return '-';
    }
    return currentFrame.second_shot.toString();
  }
}

export const formatFrameThirdShot = (currentFrame: IFrame) => {
  if(currentFrame.frame_number === 10) {
    if(currentFrame.third_shot === null) return '';
    if(currentFrame.third_shot === 10) return 'X';
    if(currentFrame.third_shot === 0) return '-';
    return currentFrame.third_shot.toString();
  }
  return '';
}


export function formatPoints(points: Number): string {
  if(Number.isNaN(points)) {
    return '-';
  }
  return points.toString();
}
