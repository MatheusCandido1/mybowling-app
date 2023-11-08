import { Container, ScoreCard, FrameNumberLabel, Label } from "./styles";
import { useGame } from "../../../../hooks/useGame";
import { IFrame } from "../../../../entities/Frame";
import { formatPoints, formatScore } from "../../../../utils/formatScore";

export function Scores() {
  const  { frames, currentFrame } = useGame();

  const ScoreColumn = ({ frame }:{frame: IFrame}) => {
    return (
      <ScoreCard
        style={{
          borderLeftWidth: frame.frame_number === 1 ? 0 : 1,
          borderRightWidth: frame.frame_number === 10 ? 0 : 1,
          borderRightColor: '#c9ccd1',
          borderLeftColor: '#c9ccd1',
        }}
      >
        <FrameNumberLabel>{frame.frame_number}</FrameNumberLabel>
        <Label>{formatScore(frame)}</Label>
        <Label>
          {currentFrame.frame_number <= frame.frame_number ? ' ' : formatPoints(frame.score)}
        </Label>
      </ScoreCard>
    )

  }


  return (
    <Container>
      {frames.map((frame) => (
        <ScoreColumn
          key={frame.frame_number} frame={frame}
        />
      ))}
    </Container>
  )
}
