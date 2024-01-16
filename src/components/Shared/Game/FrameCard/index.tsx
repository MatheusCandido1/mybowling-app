import { IFrame } from "../../../../entities/Frame";
import { SplitFrame } from "../../../Dashboard/SplitFrame";
import {
  Container,
  InformationContainer,
  BoardContainer,
  FrameNumberContainer,
  FrameNumber,
  FrameNumberLabel,
  FrameText,
  ScoreContainer,
  InformationLabel,
  InformationResult,
  InformationItem,
  ResultBadge,
  ResultBadgeText,
  FrameContainer
 } from "./styles";
import { isOpenFrame, isSpare, isStrike } from "../../../../utils/scoreHelper";
import { isSplit } from "../../../../utils/splitHelper";
import { formatFrameResult } from "../../../../utils/formatScore";

interface FrameCardProps {
  frame: IFrame;
}

export function FrameCard({ frame }: FrameCardProps) {

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
    return (
      <FrameContainer>
        <FrameText>{formatFrameResult(1, frame)}</FrameText>
        <FrameText>{formatFrameResult(2, frame)}</FrameText>
        <FrameText>{formatFrameResult(3, frame)}</FrameText>
      </FrameContainer>
    )
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
        {frame.third_shot !== null ? (
          <InformationItem>
            <InformationLabel>Third Shot:</InformationLabel>
            <InformationResult>frame.third_shot</InformationResult>
          </InformationItem>
        ):null}
          <InformationItem>
          <ResultBadge
            style={{
              backgroundColor: formatResult(frame) === 'Split Converted' ? '#0fab9e':'#ABB2B9'
            }}
          >
            <ResultBadgeText>{formatResult(frame)}</ResultBadgeText>
          </ResultBadge>
        </InformationItem>

        {frame.is_split ? (
          <InformationItem>
          <ResultBadge
            style={{
              backgroundColor: '#26a9e0',
            }}
          >
            <ResultBadgeText>{frame.pins}</ResultBadgeText>
          </ResultBadge>
        </InformationItem>
        ): null}
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
