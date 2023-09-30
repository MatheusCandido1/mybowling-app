import { View, Pressable, Text } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../Icons/PinIcon";
import { useState } from "react";

const frameToString = (frame: number[]) => {
  return frame.length > 0 ? frame.join(" - ") : "";
};

const defaultFrame = [1,2,3,4,5,6,7,8,9,10]

export function PinBoard({ onFrameSet }: { onFrameSet: (frame: string) => void }) {
  const [selectedPins, setSelectedPins] = useState<number[]>([]);

  const rows : number[][] = [
    [10, 9, 8, 7],
    [6, 5, 4],
    [3, 2],
    [1],
  ];

  function handlePinPress(pin: number) {
    setSelectedPins((prevSelectedPins) => {
      const updatedSelectedPins = prevSelectedPins.includes(pin)
        ? prevSelectedPins.filter((selectedPin) => selectedPin !== pin)
        : [...prevSelectedPins, pin];

      const currentFrame = updatedSelectedPins.sort((a, b) => a - b);
      onFrameSet(frameToString(currentFrame));

      return updatedSelectedPins;
    });
  }


  return (
    <Container>
      {rows.map((row, index) => (
        <View key={index} style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
          {row.map((index) => (
            <Pressable
              key={index}
              onPress={() => handlePinPress(index)}
            >
            <PinIcon
              key={index}
              height={60}
              width={60}
              color={selectedPins.includes(index) ? "#981b1b" : "#0d9488"}
            />
            </Pressable>
          ))}
        </View>
      ))}
    </Container>
  )
}
