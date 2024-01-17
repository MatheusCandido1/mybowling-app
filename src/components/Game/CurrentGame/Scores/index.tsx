import { Container, ScoreCard, FrameNumberLabel, Label, SplitResultContainer, ResultContainer } from "./styles";
import { useGame } from "../../../../hooks/useGame";
import { IFrame } from "../../../../entities/Frame";
import { formatPoints, formatFrameFirstShot, formatFrameSecondShot, formatFrameThirdShot, formatFrameResult } from "../../../../utils/formatScore";
import { View, Text } from "react-native";
import { isSplit } from "../../../../utils/splitHelper";
import { isStrike, isSpare, isOpenFrame, isFrameComplete } from "../../../../utils/scoreHelper";
import { isAndroid } from "../../../../utils/getOS";

interface ScoresProps {
  frames: IFrame[];
}

export function Scores({ frames }: ScoresProps) {


  const GetFrameFormat = ({frame}: {frame: IFrame}) => {
    if(frame.frame_number === 10) {
      return (
        <ResultContainer>
          <Text>{formatFrameResult(1, frame)}</Text>
          <Text>{formatFrameResult(2, frame)}</Text>
          <Text>{formatFrameResult(3, frame)}</Text>
        </ResultContainer>

      )
    }

    if(isStrike(frame)) {
      return (
        <ResultContainer>
          <Text>X</Text>
        </ResultContainer>
      )
    }

    if(isSplit(frame.pins!)) {
      return (
        <View style={{flexDirection: 'row', gap: 3, justifyContent: 'center', alignItems: 'center'}}>
        <SplitResultContainer>
          <Text style={{marginTop: isAndroid ? -1:0}}>{frame.first_shot}</Text>
        </SplitResultContainer>
        <Text>{isSpare(frame) ? '/':frame.second_shot === 0 ? '-':frame.second_shot}</Text>
        </View>
      )
    }

    if(isSpare(frame)) {
      return (
        <ResultContainer>
        <View style={{flexDirection: 'row', gap: 4, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{frame.first_shot}</Text>
          <Text>/</Text>
        </View>
        </ResultContainer>
      )
    }

    if(isOpenFrame(frame)) {
      return (
        <ResultContainer>
          <View style={{flexDirection: 'row', gap: 4, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{frame.first_shot === 0 ? '-':frame.first_shot}</Text>
            <Text>{frame.second_shot === 0 ? '-':frame.second_shot}</Text>
          </View>
        </ResultContainer>
      )
    }


    return <></>

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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FrameNumberLabel>{frame.frame_number}</FrameNumberLabel>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 4}}>
          <GetFrameFormat frame={frame} />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#c9ccd1'}}>
          <FrameNumberLabel style={{marginTop: 2}}>
            {isFrameComplete(frame) ? frame.score : ' '}
          </FrameNumberLabel>
        </View>
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
