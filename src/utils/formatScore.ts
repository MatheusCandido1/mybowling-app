import { IFrame } from "../entities/Frame";

export function formatScore(frame: IFrame): string {
  if(frame.status === 'completed') {
    if(frame.first_shot === 10) {
      return 'X';
    } else if(Number(frame.first_shot) + Number(frame.second_shot) === 10) {
      return `${frame?.first_shot} /`
    } else {
      return `${frame?.first_shot} ${frame?.second_shot}`
    }
  }
  return '-';
}

export function formatPoints(points: Number): string {
  if(Number.isNaN(points)) {
    return '-';
  }
  return points.toString();
}
