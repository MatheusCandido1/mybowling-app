import { View } from "react-native";
import { Container, ProgressContainer, ScoreText, ScoreContainer, MaxContainer, MaxValue } from "./styles";
import { useState } from "react";
import { useGame } from "../../../../hooks/useGame";

export function ScoreProgress() {
  const { score, max } = useGame();

  const progress = (score / max) * 100;

  return (
    <Container>
      <ScoreContainer>
        <ScoreText>0</ScoreText>
      </ScoreContainer>

      <ProgressContainer>
        <View style={{ width: `${progress + 1}%`, height: '100%', backgroundColor: '#0D9488' }} />
        <MaxContainer
          style={{
            left: `${progress}%`
          }}
        >
          <MaxValue>{score}</MaxValue>
        </MaxContainer>
      </ProgressContainer>

      <ScoreContainer>
        <ScoreText>{max}</ScoreText>
      </ScoreContainer>
    </Container>
  )
}
