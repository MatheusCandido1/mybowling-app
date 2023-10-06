import { IFrame } from "./Frame";

export interface IGame {
  id: string,
  date: Date,
  frames: IFrame[],
  totalScore: number,
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED',
  ball: string,
  location: string
}
