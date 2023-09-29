import { View } from "react-native";
import { PinIcon } from "./PinIcon";

interface ThreePinProps {
  height: number;
  width: number;
  color: string;
}

export function ThreePinIcon({ height, width, color }: ThreePinProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: -22,
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <View style={{ marginTop: -8}}>
        <PinIcon height={height} width={width} color={color} />
      </View>
      <PinIcon height={height} width={width} color={color} />
      <View style={{ marginTop: -8}}>
        <PinIcon height={height} width={width} color={color} />
      </View>
    </View>
  )
}
