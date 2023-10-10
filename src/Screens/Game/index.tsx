import { View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Frames, Content, SplitContainer, SplitButtonText } from "./styles";
import { Frame } from "../../components/Frame";
import { PinBoardHeader } from "../../components/Game/CurrentGame/PinBoardHeader";
import { FlatList  } from "react-native";
import { PinBoard } from "../../components/Game/CurrentGame/PinBoard";
import { Scores } from "../../components/Game/CurrentGame/Scores";
import { useState, useRef } from "react";
import { NumPad } from "../../components/Shared/NumPad";
import { useGame } from "../../hooks/useGame";
import { AlertDialog, Center, Button } from "native-base";
import { existingSplits } from "../../utils/splitHelper";


export function Game() {
  const { isNumPadVisible, frames, resetGame } = useGame();

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [frameSet, setFrameSet] = useState<string>('');
  const [showNumPad, setShowNumPad] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const onClose = () => setShowAlert(false);
  const handleAbandon = () => resetGame();

  const cancelRef = useRef(null);

  const handleFrameSet = (data: string) => {
    setFrameSet(data);
  };

  function handleGoBack() {
    setShowAlert(true);
  }

  return (
    <Container>
      <Header
        title="Game"
        onPress={handleGoBack}
      />
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
        {frameSet && existingSplits.includes(frameSet) &&
          <SplitContainer>
            <SplitButtonText>Split: {frameSet}</SplitButtonText>
          </SplitContainer>
        }

      </Content>
      {/* Cancel Game */}
      <Center>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={showAlert} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Abandon Game</AlertDialog.Header>
          <AlertDialog.Body>
            If you abandon now, you will lose all your progress. Are you sure you want to abandon this game?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleAbandon}>
                Abandon
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      </Center>
    </Container>
  )
}
