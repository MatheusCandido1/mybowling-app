import { Text, View } from "react-native";
import { IFrame } from "../../../../entities/Frame";
import { SplitFrame } from "../../../Dashboard/SplitFrame";
import {
  Container,
  InformationContainer,
  BoardContainer,
  FrameNumberContainer,
  FrameNumber,
  FrameNumberLabel,
  ShotInformationContainer,
  NoDataAvailableContainer,
  NoDataAvailableText,
  CloseFrameContainer,
  CloseFrameText,
  CloseFrameSubText,
  SplitFrameContainer,
  ScoreContainer
 } from "./styles";

interface FrameCardProps {
  frame: IFrame;
}

export function FrameCard({ frame }: FrameCardProps) {
  const isSplit = frame.is_split ? frame.split : false;

  const ClosedFrame = ({isStrike}: {isStrike: boolean}) => {
    return (
      <CloseFrameContainer>
        <CloseFrameText>{isStrike ? 'X':'/'}</CloseFrameText>
        <CloseFrameSubText>{isStrike ? 'Strike':'Spare'}</CloseFrameSubText>
      </CloseFrameContainer>
    )
  }

  const OpenFrame = () => {
    return (
    <CloseFrameContainer>
      <View style={{flexDirection: 'row', gap: 8}}>
      <CloseFrameText>{frame.first_shot === 0 || null ? '-': frame.first_shot}</CloseFrameText>
      <CloseFrameText>{frame.second_shot === 0 || null ? '-': frame.second_shot}</CloseFrameText>
      </View>
      <CloseFrameSubText>Open Frame</CloseFrameSubText>
    </CloseFrameContainer>
    )
  }

  return (
    <Container>
       <FrameNumberContainer>
          <FrameNumberLabel>Frame</FrameNumberLabel>
          <FrameNumber>{frame.frame_number}</FrameNumber>
        </FrameNumberContainer>
      <InformationContainer>

      </InformationContainer>
      <BoardContainer>
        {frame.split && <SplitFrame split={frame.split} />}
        {frame.first_shot === 10 && <ClosedFrame isStrike />}
        {frame.first_shot !== 10 && frame.points === 10 && <ClosedFrame isStrike={false} />}
        {frame.first_shot !== 10 && frame.points !== 10 && !frame.split && <OpenFrame />}
      </BoardContainer>
      <ScoreContainer>
        <FrameNumberLabel>Score</FrameNumberLabel>
        <FrameNumber>{frame.score}</FrameNumber>
      </ScoreContainer>
    </Container>
  )
}
