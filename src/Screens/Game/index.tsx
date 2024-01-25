import { FlatList, Text, View } from "react-native";
import { Header } from "../../components/Shared/Header";
import { Container, Content, FrameSwiper, CurrentFrameContainer, SplitButtonText, SplitContainer, FinishGameContainer, FinishGameText } from "./styles"
import { Frame } from "../../components/Game/CurrentGame/Frame";
import { useGame } from "../../hooks/useGame";
import { Board } from "../../components/Game/CurrentGame/Board";
import { NumPad } from "../../components/Shared/NumPad";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { useGameController } from "./useGameController";
import { ConfirmPopup } from "../../components/Shared/ConfirmPopup";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { SuperOverlayLoading } from "../../components/Shared/SuperOverlayLoading";

export function Game() {
  const {
    handleSubmit,
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList,
    isGameDone,
    isUpdatingGame
  } = useGameController();

  const navigation = useNavigation();

  useEffect(() => {
    if (isGameDone) {
      setShowConfirmPopup(true);
    }
  }, [isGameDone]);

  const [showConfirmPopup, setShowConfirmPopup] = useState(isGameDone);

  function handleGoBack() {
    handleSubmit();
    navigation.goBack();
  }

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
      {isGameDone && (
        <ConfirmPopup
          showConfirmPopup={showConfirmPopup}
          title="This game is complete!"
          text="Do you want to save this game? If you don't save it, the stats will not be available on the dashboard."
          handleCloseConfirmPopup={() => setShowConfirmPopup(false)}
          handleConfirm={handleSubmit}
          loading={isUpdatingGame}
        />
      )}
      <FinishGameButton />
      <Header title="Game" onPress={handleGoBack}  />
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
