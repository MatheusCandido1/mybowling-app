import { TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Frames, Content, ScoreButton, ScoreButtonText, SplitContainer, SplitButtonText } from "./styles";
import { Frame } from "../../components/Frame";
import { PinBoardHeader } from "../../components/PinBoardHeader";
import { FlatList  } from "react-native";
import { PinBoard } from "../../components/PinBoard";
import { Scores } from "../../components/Scores";
import { useState } from "react";

export function Game() {
  const data = [1,2,3,4,5,6,7,8,9,10]

  const [frameSet, setFrameSet] = useState<String>('');

  const handleFrameSet = (data: string) => {
    setFrameSet(data);
  };

  return (
    <Container>
      <Header title="Game" />
      <Content>
        <Frames>
          <FlatList
            data={data}
            keyExtractor={item => String(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 16 }} />}
            style={{}}
            renderItem={({ item, index }) => (
              <Frame key={index} item={item} />
            )}
          >
          </FlatList>
        </Frames>
        <PinBoardHeader />
        <PinBoard onFrameSet={handleFrameSet} />
        <Scores />
        <ScoreButton>
          <ScoreButtonText>Strike</ScoreButtonText>
        </ScoreButton>
        {frameSet &&
          <SplitContainer>
            <SplitButtonText>Split: {frameSet}</SplitButtonText>
          </SplitContainer>
        }

      </Content>
    </Container>
  )
}
