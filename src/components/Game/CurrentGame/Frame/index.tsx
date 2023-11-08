import { useState } from 'react'
import { Badge } from '../Badge'
import { Container, FinalScoreContainer, FinalScoreText, PartialScoreContainer, PartialScoreText, FrameNumberContainer, FrameNumberText } from './styles'
import { IFrame } from '../../../../entities/Frame';
import { Text, View } from 'react-native';
import { useGame } from '../../../../hooks/useGame';

interface FrameProps {
  data: IFrame;
  onPress?: () => void;
}

export function Frame({ data, onPress }: FrameProps) {
  const { currentFrame } = useGame();

  const { frame_number, status, first_shot, second_shot, score, is_split } = data;

  function getFirstShot() {
    if(first_shot === null) return '__'
    if(first_shot === 0) return '-'
    if(first_shot === 10) return 'X'
    return first_shot
  }

  function getSecondShot() {
    if(second_shot === null) return '__'
    if(second_shot === 0) return '-'
    if(Number(first_shot) + Number(second_shot) === 10) return '/'
    return second_shot
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
          borderRadius: 30,
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
        <PartialScoreText>
          {getFirstShot() === 'X' ? null : getSecondShot()}
        </PartialScoreText>
      </PartialScoreContainer>
      <FinalScoreContainer>
        {currentFrame.frame_number <= frame_number ? null : (
          <FinalScoreText>{score}</FinalScoreText>
        )}
      </FinalScoreContainer>
      <Badge
        type={status}
      />
    </Container>
  )
}
