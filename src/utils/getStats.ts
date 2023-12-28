import { IFrame } from "../entities/Frame";

export function getStrikes(frames: IFrame[]) {
  let strikes = 0;

  frames.forEach((frame) => {
    if(frame.first_shot === 10) strikes++;
    if(frame.second_shot === 10 && frame.first_shot !== 0) strikes++;
    if(frame.third_shot === 10) strikes++;
  });

  return strikes;
}

export function getSpares(frames: IFrame[]) {
  let spares = 0;

  frames.forEach((frame) => {
    if(Number(frame.first_shot) + Number(frame.second_shot) === 10 && frame.first_shot !== 10) spares++;
  });

  return spares;
}

export function getOpens(frames: IFrame[]) {
  let opens = 0;

  frames.forEach((frame) => {
    if(Number(frame.first_shot) + Number(frame.second_shot) < 10) opens++;
  });

  return opens;
}

export function getSplits(frames: IFrame[]) {
  let splits = 0;

  frames.forEach((frame) => {
    if(frame.is_split) splits++;
  });

  return splits;
}

export function getSinglePinSapres(frames: IFrame[]) {
  let singlePinSapres = 0;

  frames.forEach((frame) => {
    if(frame.frame_number !== 10) {
      if(frame.first_shot === 9 && frame.second_shot === 1) singlePinSapres++;
    }
  });

  return singlePinSapres;
}

export function getMultiPinSpares(frames: IFrame[]) {
  let multiPinSpares = 0;

  frames.forEach((frame) => {
    if(frame.frame_number !== 10) {
      if(Number(frame.second_shot) >= 2 && frame.points === 10) multiPinSpares++;
    }
  });

  return multiPinSpares;
}

export function getTenPinSpares(frames: IFrame[]) {
  let tenPinSpares = 0;

  frames.forEach((frame) => {
    if(frame.frame_number !== 10) {
      if(frame.second_shot === 10) tenPinSpares++;
    }
  });

  return tenPinSpares;
}

export function getSevenPinSpares(frames: IFrame[]) {
  let sevenPinSpares = 0;

  frames.forEach((frame) => {
    if(frame.frame_number !== 10) {
      if(frame.second_shot === 7 && frame.points === 10) sevenPinSpares++;
    }
  });

  return sevenPinSpares;
}
