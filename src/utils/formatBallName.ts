import { IBall } from "../entities/Ball";

export function formatBallName(ball: IBall) {
  return `${ball.name} - ${ball.weight}lb`;
}
