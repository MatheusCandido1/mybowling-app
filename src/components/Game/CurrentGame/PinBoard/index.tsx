import { Pressable, View } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../../../Icons/PinIcon";
import { useState } from "react";
import { useGame } from "../../../../hooks/useGame";
import Toast from 'react-native-toast-message';

export function PinBoard() {
  const [selectedPins, setSelectedPins] = useState<number[]>([]);
  const { setSplitValue, currentFrame } = useGame();

  function handlePinPress(pin: number) {

    if(selectedPins.length + 1 > (10 - Number(currentFrame.first_shot))) {
      Toast.show({
        type: 'error',
        text1: 'Split Error',
        text2: "You can't select more pins than the remaining pins!",
        visibilityTime: 2000,
        autoHide: true,
      })
      return;
    }
    else {

      setSelectedPins((prevSelectedPins) => {

        const updatedSelectedPins = prevSelectedPins.includes(pin)
          ? prevSelectedPins.filter((selectedPin) => selectedPin !== pin)
          : [...prevSelectedPins, pin];


        if(updatedSelectedPins.length > 2) {
          return updatedSelectedPins;
        }

        const currentSplit = updatedSelectedPins.sort((a, b) => a - b);

        setSplitValue(currentSplit.join('-'));

        return updatedSelectedPins;
      });
    }
  }

  const rows : number[][] = [
    [7,8,9,10],
    [4,5,6],
    [2,3],
    [1],
  ];

  return (
    <Container>
    {rows.map((row, index) => (
      <View key={index} style={{flexDirection: 'row', justifyContent: 'center'}}>
        {row.map((index) => (
          <Pressable
            key={index}
            onPress={() => handlePinPress(index)}
          >
            <PinIcon
              key={index}
              height={56}
              width={56}
              color={selectedPins.includes(index) ? "#981b1b" : "#0d9488"}
            />
          </Pressable>
        ))}
      </View>
    ))}
  </Container>
  )
}
