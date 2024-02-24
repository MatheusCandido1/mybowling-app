import { View, Text } from "react-native";
import { SplitFrame } from "../SplitFrame";
import { PinsContainer, SplitItemContainer, SplitStatsContainer, SplitTitle, SplitTitleContainer } from "./styles";

interface SplitCardProps {
  split: string;
  attempts: number;
  converted: number;
  rate: number;
}

export function SplitCard({ split, attempts, converted, rate }: SplitCardProps) {
  return (
    <SplitItemContainer>
    <PinsContainer>
      <SplitFrame split={split} />
    </PinsContainer>
    <SplitStatsContainer>
      <SplitTitleContainer>
        <SplitTitle>{split}</SplitTitle>
      </SplitTitleContainer>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Text>Attempted: <Text style={{fontWeight: 'bold'}}>{attempts}</Text> </Text>
        <Text>Converted: <Text style={{fontWeight: 'bold'}}>{converted}</Text> </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Text>Conversion Rate: <Text style={{fontWeight: 'bold'}}>{rate}%</Text> </Text>
        </View>

      </View>
    </SplitStatsContainer>
  </SplitItemContainer>
  )
}
