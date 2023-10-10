import { Container, ScoreCard, FrameNumberLabel, Label } from "./styles";
import { useGame } from "../../../../hooks/useGame";
import { IFrame } from "../../../../entities/Frame";
import { formatPoints, formatScore } from "../../../../utils/formatScore";

export function Scores() {
  const  { frames } = useGame();

  const ScoreColumn = ({ frame }:{frame: IFrame}) => {
    return (
      <ScoreCard
        style={{
          borderLeftWidth: frame.frameNumber === 1 ? 0 : 1,
          borderRightWidth: frame.frameNumber === 10 ? 0 : 1,
          borderRightColor: '#c9ccd1',
          borderLeftColor: '#c9ccd1',
        }}
      >
        <FrameNumberLabel>{frame.frameNumber}</FrameNumberLabel>
        <Label>{formatScore(frame)}</Label>
        <Label>{formatPoints(frame.currentScore)}</Label>
      </ScoreCard>
    )

  }


  return (
    <Container>
      {frames.map((frame) => (
        <ScoreColumn
          key={frame.frameNumber} frame={frame}
        />
      ))}
    </Container>
  )
}
