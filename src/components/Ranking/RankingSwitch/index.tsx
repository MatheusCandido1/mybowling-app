import { useState } from "react";
import { Container, Option, OptionText } from "./styles";
import { useRanking } from "../../../hooks/useRanking";

export function RankingSwitch() {

  const {
    rankingType,
    handleSetRankingType
  } = useRanking();

  const options = ['Score', 'Average'];

  return (
    <Container>
      {options.map((option) => {
        return (
          <Option
            key={option}
            onPress={() => handleSetRankingType(option)}
            style={{
              backgroundColor: option === rankingType ? '#0d9488' : '#FFF',
            }}
          >
            <OptionText
              style={{
                color: option === rankingType ? '#FFF' : '#085e56',
              }}
            >{option}</OptionText>
          </Option>
        )})}
    </Container>
  )
}
