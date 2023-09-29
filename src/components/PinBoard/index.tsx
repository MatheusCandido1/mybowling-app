import { View } from "react-native";
import { Container } from "./styles";
import { PinIcon } from "../Icons/PinIcon";

export function PinBoard() {

  const rows : number[][] = [
    [10, 9, 8, 7],
    [6, 5, 4],
    [3, 2],
    [1],
  ];


  return (
    <Container>
      {rows.map((row, index) => (
        <View key={index} style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
          {row.map((index) => (
            <PinIcon
              key={index}
              height={60}
              width={60}
              color="#0d9488"
            />
          ))}
        </View>
      ))}
    </Container>
  )
}
