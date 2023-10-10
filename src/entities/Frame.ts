export interface IFrame {
  frameNumber: number,
  isStrike: boolean,
  isSpare: boolean,
  currentScore: number,
  firstBall: {
    pins: number | undefined,
    thrown: boolean,
    split?: string,
  },
  secondBall: {
    pins: number | undefined,
    thrown: boolean,
    split?: string,
  },
  thirdBall?: {
    pins: number | undefined,
    thrown: boolean,
  },
  points: number,
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED',
}
