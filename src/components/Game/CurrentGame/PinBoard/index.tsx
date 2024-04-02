import { Pressable, View, Text } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../../../Icons/PinIcon";
import { useEffect, useState } from "react";
import { useGame } from "../../../../hooks/useGame";
import Toast from 'react-native-toast-message';

export function PinBoard() {
  const { setSplitValue, currentFrame } = useGame();

  const [selectedPins, setSelectedPins] = useState<number[]>(currentFrame.pins?.split("-").map(Number) || []);


  useEffect(() => {
    setSelectedPins(currentFrame.pins?.split("-").map(Number).filter(pin => pin !== 0) || []);
  }, [currentFrame.pins]);

  const allowPinSelection = currentFrame.first_shot !== null && currentFrame.first_shot !== 10;

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
        setSplitValue(currentSplit.join('-'));

        return updatedSelectedPins;
      });
      return;
    }

    if (selectedPins.length >= (10 - Number(currentFrame.first_shot))) {
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
