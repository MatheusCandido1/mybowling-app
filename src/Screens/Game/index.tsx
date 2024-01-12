import { FlatList, View } from "react-native";
import { Header } from "../../components/Shared/Header";
import { Container, Content, FrameSwiper, CurrentFrameContainer, SplitButtonText, SplitContainer, FinishGameContainer, FinishGameText } from "./styles"
import { Frame } from "../../components/Game/CurrentGame/Frame";
import { useGame } from "../../hooks/useGame";
import { Board } from "../../components/Game/CurrentGame/Board";
import { NumPad } from "../../components/Shared/NumPad";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { useGameController } from "./useGameController";

export function Game() {
  const {
    handleSubmit,
    isUpdatingGame,
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList,
    isGameDone,
    handleSaveGame,
  } = useGameController();

  const FinishGameButton = () => {
    return (
      <FinishGameContainer
        onPress={handleSubmit}
      >
        <FinishGameText>
          {!isGameDone ? 'Pause' : 'Finish'}
        </FinishGameText>
        {isGameDone ? <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={20} color="#0d9488" /> : <MaterialCommunityIcons name="motion-pause-outline" size={20} color="#0d9488" />}
      </FinishGameContainer>
    )
  }

  return (
    <Container>
      <FinishGameButton />
      <Header title="Game" />
      {isNumPadVisible ? <NumPad /> : null}
      <Content>

        <FrameSwiper>
          <FlatList
            ref={framesList}
            data={frames}
            keyExtractor={item => item.frame_number.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            style={{}}
            renderItem={(frame) => (
              <Frame
                data={frame.item}
                onPress={() => handleCurrentFrame(frame.item)}
              />
            )}
          />
        </FrameSwiper>
        <CurrentFrameContainer>
          <Board/>
        </CurrentFrameContainer>
      </Content>
    </Container>
  )
}
