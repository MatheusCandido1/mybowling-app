import { Container, ScoreCard, FrameNumberLabel, LabelContainer, Label } from "./styles";
import { useGame } from "../../../../hooks/useGame";
import { IFrame } from "../../../../entities/Frame";
import { formatPoints, formatFrameFirstShot, formatFrameSecondShot, formatFrameThirdShot } from "../../../../utils/formatScore";
import { View } from "react-native";

interface ScoresProps {
  frames: IFrame[];
}

export function Scores({ frames }: ScoresProps) {
  //const  { frames, currentFrame } = useGame();

  function SplitComponent({frame}:{frame: IFrame}) {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#000',
          borderWidth: 1,
        }}
        >
          <Label>{formatFrameFirstShot(frame)}</Label>
      </View>
    )
  }

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
        <LabelContainer>
          {frame.is_split ? <SplitComponent frame={frame} /> : <Label>{formatFrameFirstShot(frame)}</Label>}
          {frame.second_shot !== null && <Label>{formatFrameSecondShot(frame)}</Label>}
          {frame.third_shot !== null && <Label>{formatFrameThirdShot(frame)}</Label>}
        </LabelContainer>
        <Label>
          {formatPoints(frame.score)}
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
