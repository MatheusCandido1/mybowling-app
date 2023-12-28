import { IBall } from "./Ball";
import { IFrame } from "./Frame";
import { ILocation } from "./Location";

export interface IGame {
  id: string,
  game_date: Date,
  frames: IFrame[],
  total_score: number,
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED',
  ball: IBall,
  location: ILocation
}
