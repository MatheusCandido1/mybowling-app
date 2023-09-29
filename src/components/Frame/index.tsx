import { Card, FrameNumber, ScoreInput, ScoreInputContainer, ScoreText } from "./styles";

interface FrameProps {
  item: number;
}

export function Frame({ item }: FrameProps) {
  return (
    <Card>
      <FrameNumber>Frame {item}</FrameNumber>
      <ScoreInputContainer>
        <ScoreInput />
        <ScoreInput />
      </ScoreInputContainer>
      <ScoreText>X</ScoreText>
    </Card>
  )
}
