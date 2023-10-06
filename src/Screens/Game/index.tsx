import { View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Frames, Content, SplitContainer, SplitButtonText } from "./styles";
import { Frame } from "../../components/Frame";
import { PinBoardHeader } from "../../components/PinBoardHeader";
import { FlatList  } from "react-native";
import { PinBoard } from "../../components/PinBoard";
import { Scores } from "../../components/Scores";
import { useState } from "react";
import { NumPad } from "../../components/Shared/NumPad";
import { useGame } from "../../hooks/useGame";

export function Game() {
  const { isNumPadVisible, frames } = useGame();

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [frameSet, setFrameSet] = useState<String>('');
  const [showNumPad, setShowNumPad] = useState(false)

  const handleFrameSet = (data: string) => {
    setFrameSet(data);
  };

  return (
    <Container>
      <Header title="Game" />
      {isNumPadVisible && <NumPad />}
      <Content>
        <Frames>
          <FlatList
            data={frames}
            keyExtractor={item => String(item.frameNumber)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            style={{}}
            renderItem={({ item }) => (
              <Frame
                item={item}
              />
            )}
          >
          </FlatList>
        </Frames>
        <PinBoardHeader />
        <PinBoard onFrameSet={handleFrameSet} />
        <Scores />
        {frameSet &&
          <SplitContainer>
            <SplitButtonText>Split: {frameSet}</SplitButtonText>
          </SplitContainer>
        }

      </Content>

    </Container>
  )
}
