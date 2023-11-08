import { FlatList, View } from "react-native";
import { Header } from "../../components/Shared/Header";
import { Container, Content, FrameSwiper, CurrentFrameContainer, SplitButtonText, SplitContainer } from "./styles"
import { Frame } from "../../components/Game/CurrentGame/Frame";
import { useGame } from "../../hooks/useGame";
import { Board } from "../../components/Game/CurrentGame/Board";
import { NumPad } from "../../components/Shared/NumPad";

export function Game() {
  const {
    frames,
    handleCurrentFrame,
    isNumPadVisible,
    framesList
  } = useGame();

  return (
    <Container>
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
