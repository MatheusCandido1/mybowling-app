import { Text } from "react-native";
import { Container, ScoreCard, FrameNumberLabel, Label } from "./styles";

export function Scores() {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const ScoreColumn = ({ frame }:{frame: number}) => {
    return (
      <ScoreCard
        style={{
          borderLeftWidth: frame === 1 ? 0 : 1,
          borderRightWidth: frame === 10 ? 0 : 1,
          borderRightColor: '#c9ccd1',
          borderLeftColor: '#c9ccd1',
        }}
      >
        <FrameNumberLabel>{frame}</FrameNumberLabel>
        <Label>-</Label>
        <Label>-</Label>
      </ScoreCard>
    )

  }


  return (
    <Container>
      {frames.map((frame) => (
        <ScoreColumn
          key={frame} frame={frame}
        />
      ))}

    </Container>
  )
}
