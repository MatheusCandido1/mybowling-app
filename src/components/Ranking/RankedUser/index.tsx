import { View } from "react-native";
import { Avatar } from "../../Shared/Avatar";
import { Container, Column, Name, Rank, ResultContainer, Result } from "./styles";

interface RankedUserProps {
  rank: number;
  name?: string;
  avatar?: string;
  score?: number;
  onPress?(): void;
}

export function RankedUser({ rank, name, avatar, score, onPress}: RankedUserProps) {
  return (
    <Container onPress={onPress}>
      <Column>
        <Rank>{rank}th</Rank>
        <Avatar
          imageUri={avatar}
        />
        <Name>{name}</Name>
      </Column>
      <ResultContainer>
        <Result>{score}</Result>
      </ResultContainer>
    </Container>

  )
}
