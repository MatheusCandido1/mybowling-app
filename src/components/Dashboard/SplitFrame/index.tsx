import { View } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../../Icons/PinIcon";

interface SplitFrameProps {
  split: string;
}

export function SplitFrame({ split }: SplitFrameProps) {

  const rows : number[][] = [
    [7,8,9,10],
    [4,5,6],
    [2,3],
    [1],
  ];

  const selectedPins = split.split('-').map((item) => Number(item));

  return (
    <Container>
       {rows.map((row, index) => (
        <View key={index} style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
          {row.map((index) => (
            <PinIcon
              key={index}
              height={24}
              width={24}
              color={selectedPins.includes(index) ? "#981b1b" : "#0d9488"}
            />
          ))}
        </View>
    ))}
    </Container>
  );
}
