import { IGame } from "../../../../entities/Game";
import { formatBallName } from "../../../../utils/formatBallName";
import { formatDate } from "../../../../utils/formatDate";
import { Ball2Icon } from "../../../Icons/Ball2Icon";
import {
  Container,
  InformationContainer,
  InformationText,
  ButtonContainer,
  Button,
  ButtonText,
  InformationItem
} from "./styles"

import { MaterialCommunityIcons, FontAwesome, Entypo, Octicons } from "@expo/vector-icons";

interface OnGoingGameCardProps {
  game: IGame;
}

export function OnGoingGameCard({ game }: OnGoingGameCardProps) {
  const { ball, location, game_date, total_score } = game;

  const formattedDate = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(game_date));

  return (
    <Container>
      <InformationContainer>
        <InformationItem>
          <FontAwesome name="calendar" size={20} color="#000" />
          <InformationText>{formattedDate}</InformationText>
        </InformationItem>

        <InformationItem>
          <Ball2Icon height={20} width={20} color={game.ball?.color} />
          <InformationText>{formatBallName(ball)}</InformationText>

        </InformationItem>

        <InformationItem>
          <Entypo name="location" size={20} color="#000" />
          <InformationText>{location.name}</InformationText>
        </InformationItem>

        <InformationItem>
          <MaterialCommunityIcons name="scoreboard" size={20} color="#000" />
            <InformationText>
              Score: {total_score}</InformationText>
        </InformationItem>
      </InformationContainer>
      <ButtonContainer>
        <Button>
          <Octicons name="play" size={32} color="#FFF" />
          <ButtonText>Resume</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}
