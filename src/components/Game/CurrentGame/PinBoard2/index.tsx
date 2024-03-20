import { Pressable, View, Text } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../../../Icons/PinIcon";
import { useEffect, useState } from "react";
import { useGame } from "../../../../hooks/useGame";
import Toast from 'react-native-toast-message';

export function PinBoard2() {
  const { setSplitValue, currentFrame } = useGame();

  const [selectedPins, setSelectedPins] = useState<number[]>(currentFrame.pins2?.split("-").map(Number) || []);


  useEffect(() => {
    setSelectedPins(currentFrame.pins2?.split("-").map(Number) || []);
  }, [currentFrame.pins2]);


  const allowPinSelection = currentFrame.second_shot !== null && currentFrame.second_shot !== 10;

  function handlePinPress(pin: number) {
    if (!allowPinSelection) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "You can't select pins in this frame! Please throw the ball!",
        visibilityTime: 2000,
        autoHide: true,
      });
      return;
    }

    if (selectedPins.includes(pin)) {
      setSelectedPins((prevSelectedPins) => {
        const updatedSelectedPins = prevSelectedPins.filter((selectedPin) => selectedPin !== pin);
        const currentSplit = updatedSelectedPins.sort((a, b) => a - b);
        // Remove 0 from selected pins
        if (currentSplit.includes(0)) {
          currentSplit.splice(currentSplit.indexOf(0), 1);
        }
        setSplitValue(currentSplit.join('-'));

        return updatedSelectedPins;
      });
      return;
    }

    if (selectedPins.length >= (10 - currentFrame.second_shot)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "You can't select more pins than the number of pins left!",
        visibilityTime: 2000,
        autoHide: true,
      });
      return;
    }

    setSelectedPins((prevSelectedPins) => {
      const updatedSelectedPins = prevSelectedPins.includes(pin)
        ? prevSelectedPins.filter((selectedPin) => selectedPin !== pin)
        : [...prevSelectedPins, pin];
      const currentSplit = updatedSelectedPins.sort((a, b) => a - b);
      // Remove 0 from selected pins
      if (currentSplit.includes(0)) {
        currentSplit.splice(currentSplit.indexOf(0), 1);
      }
      setSplitValue(currentSplit.join('-'));

      return updatedSelectedPins;
    });
  }


  const rows : number[][] = [
    [7,8,9,10],
    [4,5,6],
    [2,3],
    [1],
  ];

  return (
    <Container
      pointerEvents={allowPinSelection ? 'auto' : 'none'}
      style={{
        opacity: !allowPinSelection ? 0.5 : 1
      }}
    >
    {rows.map((row, index) => (
      <View key={index} style={{flexDirection: 'row', justifyContent: 'center'}}>
        {row.map((index) => (
          <Pressable
            key={index}
            onPress={() => handlePinPress(index)}
          >
            <PinIcon
              key={index}
              height={52}
              width={52}
              color={selectedPins.includes(index) ? "#981b1b" : "#0d9488"}
            />
          </Pressable>
        ))}
      </View>
    ))}
  </Container>
  )
}
