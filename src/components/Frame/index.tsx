import { Card, FrameNumber, ScoreInput, ScoreInputContainer, ScoreText } from "./styles";
import { useGame } from "../../hooks/useGame";
import { IFrame } from "../../entities/Frame";

interface FrameProps {
  item: IFrame;
}

export function Frame({ item }: FrameProps) {
  const {
    frameNumber,
    status,
    firstBall,
    secondBall,
    points
  } = item;

  const {
    openNumPad,
    input1,
    input2,

  } = useGame();

  const onFocusEmitter = () => {
    openNumPad();
  }

  function formatFrameInput1() {
    if(item.isStrike) {
      return 'X';
    }
    if(!item.isStrike && firstBall.thrown) {
      return String(firstBall.pins);
    }
  }

  function formatFrameInput2() {
    if(item.isSpare) {
      return '/';
    }
    if(!item.isSpare && secondBall.thrown) {
      return String(secondBall.pins);
    }
  }

  const cardCompletedStyle = {
    backgroundColor: '#0d9488',
    borderColor: '#0d9488',
    color: '#FFF'
  }

  const cardInProgressStyle = {
    backgroundColor: '#FFF',
    borderColor: '#0d9488',
    color: '#0d9488'
  }

  const cardWaitingStyle = {
    backgroundColor: '#E9E9E9',
    color: '#000'
  }

  const inputCompletedStyle = {
    borderWidth: 2,
    borderColor: '#0d9488'
  }

  const inputInProgressStyle = {
    borderWidth: 2,
    borderColor: '#0d9488'
  }

  const inputWaitingStyle = {
    borderWidth: 2,
    borderColor: '#E9E9E9'
  }
    //const allowBall2 = !item.isStrike || item.firstBall.thrown || item.status === 'COMPLETED';




  return (
    <Card
      style={{
        ...status === 'COMPLETED' ? cardCompletedStyle : {},
        ...status === 'IN_PROGRESS' ? cardInProgressStyle : {},
        ...status === 'WAITING' ? cardWaitingStyle : {},
      }}
    >
      <FrameNumber>Frame {frameNumber}</FrameNumber>
      <ScoreInputContainer>
        <ScoreInput
          keyboardType="number-pad"
          showSoftInputOnFocus={false}
          onFocus={onFocusEmitter}
          selectionColor={'transparent'}
          value={formatFrameInput1()}
          style={{
            ...status === 'COMPLETED' ? inputCompletedStyle : {},
            ...status === 'IN_PROGRESS' ? inputInProgressStyle : {},
            ...status === 'WAITING' ? inputWaitingStyle : {},
            opacity: status === 'COMPLETED' ? 0.5 : 1
          }}
        />
        <ScoreInput
          keyboardType="number-pad"
          showSoftInputOnFocus={false}
          onFocus={onFocusEmitter}
          value={formatFrameInput2()}
          editable={!item.isStrike}
          selectTextOnFocus={!item.isStrike}
          selectionColor={'transparent'}
          style={{
            ...status === 'COMPLETED' ? inputCompletedStyle : {},
            ...status === 'IN_PROGRESS' ? inputInProgressStyle : {},
            ...status === 'WAITING' ? inputWaitingStyle : {},
            opacity: item.isStrike || status === 'COMPLETED' ? 0.5 : 1,
          }}
        />
      </ScoreInputContainer>
      <ScoreText>{item.status !== 'WAITING' && points}</ScoreText>
    </Card>
  )
}
