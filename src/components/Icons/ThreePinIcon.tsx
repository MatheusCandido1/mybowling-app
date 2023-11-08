import { View } from "react-native";
import { PinIcon } from "./PinIcon";
import { isIpad } from '../../utils/getDevice';

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
        gap: isIpad() ? -28:-22,
        alignItems: 'center',
        marginTop: 4,
        backgroundColor: 'red'
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
