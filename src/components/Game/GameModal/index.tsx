import {
  Container,
  Overlay,
  Form,
  InputContainer,
  GroupSelectButton,
  GroupButton,
  GroupButtonLabel,
  OnGoingHeader,
  FilterText,
  FilterButton,
  GroupButtonQuantity,
  GroupButtonQuantityText
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";
import { MainButton } from "../../Shared/Buttons/MainButton";
import { useNavigation } from "@react-navigation/native";
import { useNewGameController } from "./useNewGameController";
import { OverlayLoading } from "../../Shared/OverlayLoading";
import { Controller } from "react-hook-form";
import { ModalHeader } from "../../Shared/Game/ModalHeader";
import { OnGoingGameCard } from "../OnGoingGames/OnGoingGameCard";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { IGame } from "../../../entities/Game";
import { Separator } from "../../Shared/Separator";
import { NewGameModalHeight } from "../../../utils/modalHeightByDevice";
import { DateInput } from "../../Shared/Forms/DateInput";


export function GameModal() {
  const [showNewGame, setShowNewGame] = useState(true);
  const [filter, setFilter] = useState('Most Recent');

  const navigation = useNavigation();

  const {
    locations,
    isFetchingLocations,
    onSubmit,
    handleSubmit,
    control,
    errors,
    isCreatingGame,
    onGoingGames,
    groups,
    shouldEnableGroups,
    handleContinueGame
  } = useNewGameController();

  const ModalHeight = shouldEnableGroups ? NewGameModalHeight()?.dimension - 90 : NewGameModalHeight()?.dimension;

  const sortedOnGoingGames = onGoingGames.sort((a: IGame, b: IGame) => {
    if (filter === 'Most Recent') {
      return new Date(b.game_date).getTime() - new Date(a.game_date).getTime();
    } else {
      return new Date(a.game_date).getTime() - new Date(b.game_date).getTime();
    }
  })

  const isLoadingResources = isFetchingLocations;

  function handleCloseModal() {
    navigation.navigate('Dashboard');
  }

  function handleFilterOnGoingGames() {
    if (filter === 'Most Recent') {
      setFilter('Oldest');
    } else {
      setFilter('Most Recent');
    }
  }

  const onGoingGame = () => {
    return (
      <>
        <OnGoingHeader>
          <FilterButton onPress={handleFilterOnGoingGames}>
            <FilterText>{filter}</FilterText>
            <MaterialCommunityIcons
              name={
                filter === 'Most Recent' ?
                "chevron-double-down" :
                "chevron-double-up"
              }
              size={24}
              color="#000"

            />
          </FilterButton>
        </OnGoingHeader>
        <FlatList
          data={sortedOnGoingGames}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OnGoingGameCard
              game={item}
              onPress={() => handleContinueGame(item)}
            />
          )}
        />
      </>
    )
  }

  const newGame = () => {
    return (
      <>
      <Form>
        <InputContainer>
        <Controller
          control={control}
          name="game_date"
          defaultValue={new Date()}
          render={({ field: { onChange, value }}) => (
            <DateInput
              label="Game date"
              onChange={onChange}
              value={value}
            />
          )}
        />
        </InputContainer>
        <InputContainer
          style={{
            marginTop: 20
          }}
        >
        <Controller
          control={control}
          name="location_id"
          defaultValue=""
          render={({ field: { onChange, value }}) => (
            <SelectInput
              label="Select location"
              items={locations}
              onChange={onChange}
              value={value}
              error={errors.location_id?.message}
            />
          )}
        />
        </InputContainer>
        {
          shouldEnableGroups ? (
            <InputContainer>
            <Controller
              control={control}
              name="group_id"
              defaultValue=""
              render={({ field: { onChange, value }}) => (
                <SelectInput
                  label="Select the group (optional)"
                  items={groups}
                  onChange={onChange}
                  value={value}
                  error={errors.group_id?.message}
                />
              )}
            />
            </InputContainer>
          ) : null

        }

        <InputContainer>
          <Controller
          name="ball_id"
          control={control}
          defaultValue={""}
          render={({ field: { onChange, value }}) => (
            <BallSelectInput
              label="Select ball"
              onChange={onChange}
              value={value}
              error={errors.ball_id?.message}
            />
            )}
          />
        </InputContainer>
        <InputContainer
          style={{
            marginTop: 4
          }}
        >
          <MainButton
            onPress={handleSubmit(onSubmit)}
            isLoading={isCreatingGame}
            label="Start Game"
          />
        </InputContainer>
      </Form>
    </>
    )
  }

  const GroupButtonGame = () => {
    return (
      <GroupSelectButton>
            <GroupButton
              onPress={() => setShowNewGame(true)}
              style={{
                backgroundColor: !showNewGame ? '#0d9488' : '#FFF',
              }}
            >
              <GroupButtonLabel
                style={{
                  color: !showNewGame ? '#FFF' : '#0d9488',
                }}
              >
                New Game
              </GroupButtonLabel>
            </GroupButton>
            <GroupButton
              onPress={() => setShowNewGame(false)}
              style={{
                backgroundColor: showNewGame ? '#0d9488' : '#FFF',
              }}
            >
              <GroupButtonLabel
                style={{
                  color: showNewGame ? '#FFF' : '#0d9488',
                }}
              >Existing Games
              </GroupButtonLabel>
              <GroupButtonQuantity
                style={{
                  backgroundColor: showNewGame ? '#FFF' : '#0d9488',
                }}
              >
                <GroupButtonQuantityText
                  style={{
                    color: !showNewGame ? '#FFF' : '#0d9488',
                  }}
                >
                  {onGoingGames.length}
                </GroupButtonQuantityText>
              </GroupButtonQuantity>
            </GroupButton>
          </GroupSelectButton>
    )
  }


  return (
      <Overlay>
      {isLoadingResources && <OverlayLoading />}
      {!isLoadingResources && (
        <Container
          style={{
            marginTop: ModalHeight,
          }}
        >
          <ModalHeader
            title="Start Bowling!"
            onPress={handleCloseModal}
          />
          <GroupButtonGame />
          {showNewGame ? newGame() : onGoingGame()}
          <Separator height={40} device="small" />
        </Container>
      )}
      </Overlay>
  )
}
