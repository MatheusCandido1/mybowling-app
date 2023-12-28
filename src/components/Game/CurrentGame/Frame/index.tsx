import { Badge } from '../Badge'
import { Container, FinalScoreContainer, FinalScoreText, PartialScoreContainer, PartialScoreText, FrameNumberContainer, FrameNumberText } from './styles'
import { IFrame } from '../../../../entities/Frame';
import { View } from 'react-native';
import { useGame } from '../../../../hooks/useGame';

interface FrameProps {
  data: IFrame;
  onPress?: () => void;
}

export function Frame({ data, onPress }: FrameProps) {
  const { currentFrame } = useGame();

  const { frame_number, status, first_shot, second_shot, third_shot, score, is_split } = data;

  function getFirstShot() {
    if(first_shot === null) return '__'
    if(first_shot === 0) return '-'
    if(first_shot === 10) return 'X'
    return first_shot
  }

  function getSecondShot() {
    if(frame_number === 10) {
      if(second_shot === 10) return 'X';
    }


    if(first_shot === 10) return ''
    if(second_shot === null) return '__'
    if(second_shot === 0) return '-'
    if(Number(first_shot) + Number(second_shot) === 10) return '/'
    return second_shot
  }

  function getThirdShot() {
    if(third_shot === null) return '';
    if(third_shot === 0) return '-';
    if(third_shot === 10) return 'X';
    return third_shot;
  }


  function getColor() {
    if(status === 'pending') {
      return '#ABB2B9'
    }

    if(status === 'completed') {
      return '#0D9488'
    }

    if(status === 'in_progress') {
      return '#3498DB'
    }
  }

  function ScoreComponent() {
    return (
      <PartialScoreText>
        {getFirstShot()}
      </PartialScoreText>
    )
  }

  function SplitComponent() {
    return (
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#000',
          borderWidth: 1,
        }}
        >
          <ScoreComponent />
      </View>
    )
  }

  return (
    <Container
      onPress={onPress}
      style={{
        borderColor: getColor()
      }}
    >
      <FrameNumberContainer
        style={{
          backgroundColor: getColor()
        }}
      >
        <FrameNumberText>{frame_number}</FrameNumberText>
      </FrameNumberContainer>
      <PartialScoreContainer>
        {is_split ? <SplitComponent /> : <ScoreComponent />}
        <PartialScoreText>{getSecondShot()}</PartialScoreText>

        {frame_number === 10 && <PartialScoreText>{getThirdShot()}</PartialScoreText>}
      </PartialScoreContainer>
      <FinalScoreContainer>
        <FinalScoreText>{score}</FinalScoreText>
      </FinalScoreContainer>
      <Badge
        type={status}
      />
    </Container>
  )
}
