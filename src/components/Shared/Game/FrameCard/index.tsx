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
  ScoreContainer,
  InformationLabel,
  InformationResult,
  InformationItem,
  ResultBadge,
  ResultBadgeText
 } from "./styles";
import { isOpenFrame, isSpare, isStrike } from "../../../../utils/scoreHelper";
import { isSplit } from "../../../../utils/splitHelper";

interface FrameCardProps {
  frame: IFrame;
}

export function FrameCard({ frame }: FrameCardProps) {

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

  function formatResult(frame: IFrame) {
    if(isStrike(frame)) {
      return 'Strike';
    }
    if(isSpare(frame)) {
      if(isSplit(frame.pins)) {
        return 'Split Converted'
      }
      return 'Spare';
    }
    if(isOpenFrame(frame)) {
      return 'Open Frame';
    }
  }

  const BoardDisplay = () => {
    if(frame.pins) {
      return <SplitFrame split={frame.pins} />
    }

    if(frame.first_shot === 10) {
      return <ClosedFrame isStrike />
    }

    if(frame.first_shot !== 10 && frame.points === 10) {
      return <ClosedFrame isStrike={false} />
    }

    if(frame.first_shot !== 10 && frame.points !== 10) {
      return <OpenFrame />
    }
  }

  return (
    <Container>
       <FrameNumberContainer>
          <FrameNumberLabel>Frame</FrameNumberLabel>
          <FrameNumber>{frame.frame_number}</FrameNumber>
        </FrameNumberContainer>
      <InformationContainer>
        <InformationItem>
          <InformationLabel>First Shot:</InformationLabel>
          <InformationResult>{frame.first_shot}</InformationResult>
        </InformationItem>
        <InformationItem>
          <InformationLabel>Second Shot:</InformationLabel>
          <InformationResult>{frame.second_shot}</InformationResult>
        </InformationItem>
        {frame.third_shot && (
          <InformationItem>
            <InformationLabel>Third Shot:</InformationLabel>
            <InformationResult>{frame.third_shot}</InformationResult>
          </InformationItem>
        )}
        <InformationItem>
          <ResultBadge
            style={{
              backgroundColor: formatResult(frame) === 'Split Converted' ? '#0fab9e':'#ABB2B9'
            }}
          >
            <ResultBadgeText>{formatResult(frame)}</ResultBadgeText>
          </ResultBadge>
        </InformationItem>

        {frame.is_split && (
          <InformationItem>
          <ResultBadge
            style={{
              backgroundColor: '#26a9e0',
            }}
          >
            <ResultBadgeText>{frame.pins}</ResultBadgeText>
          </ResultBadge>
        </InformationItem>

        )}

      </InformationContainer>
      <BoardContainer>
        <BoardDisplay />
      </BoardContainer>
      <ScoreContainer>
        <FrameNumberLabel>Score</FrameNumberLabel>
        <FrameNumber>{frame.score}</FrameNumber>
      </ScoreContainer>
    </Container>
  )
}
