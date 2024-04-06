import { useRef } from "react";
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
  InformationItem,
  SwipeContainer,
  DeleteButton,
  DeleteButtonText
} from "./styles"

import { MaterialCommunityIcons, FontAwesome, Entypo, Octicons } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { onGoingGameCardController } from "./onGoingGameCardController";
import { ConfirmPopup } from "../../../Shared/ConfirmPopup";

interface OnGoingGameCardProps {
  game: IGame;
  onPress: () => void;
}

export function OnGoingGameCard({ game, onPress }: OnGoingGameCardProps) {
  const {
    showConfirmDelete,
    handleShowConfirmDelete,
    handleHideConfirmDelete,
    swipeableRef,
    handleDeleteGame,
    isDeletingGame
  } = onGoingGameCardController();

  const { id, ball, location, game_date, total_score } = game;

  const formattedDate = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(game_date));

  const LeftSwipeActions = () => {
    return (
      <SwipeContainer>
        <DeleteButton
          onPress={handleShowConfirmDelete}
        >
          <DeleteButtonText>Delete</DeleteButtonText>
          <MaterialCommunityIcons name="delete" size={20} color="#D2042D"  />
        </DeleteButton>
      </SwipeContainer>
    )
  };

  return (
    <>

    <ConfirmPopup
      showConfirmPopup={showConfirmDelete}
      title="Delete Game"
      text="Are you sure you want to delete this game?"
      handleConfirm={() => handleDeleteGame(id)}
      handleCloseConfirmPopup={handleHideConfirmDelete}
      loading={isDeletingGame}
    />
    <Swipeable
    ref={swipeableRef}
    renderRightActions={LeftSwipeActions}
    rightThreshold={0}
    >
    <Container>
      <InformationContainer>
        <InformationItem>
          <FontAwesome name="calendar" size={20} color="#000" />
          <InformationText>{formattedDate}</InformationText>
        </InformationItem>

        {game.ball && (
        <InformationItem>
          <Ball2Icon height={20} width={20} color={game.ball?.color} />
          <InformationText>{formatBallName(ball)}</InformationText>
        </InformationItem>
        )}

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
      <ButtonContainer
        onPress={onPress}
      >
        <Button>
          <Octicons name="play" size={32} color="#FFF" />
          <ButtonText>Resume</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
    </Swipeable>
    </>
  )
}
