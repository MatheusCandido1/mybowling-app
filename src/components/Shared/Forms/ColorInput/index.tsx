import { View } from "react-native";
import {
  Container,
  Label,
  ColorPickerContainer,
  BallContainer
} from "./styles";
import ColorPicker, { Panel1, HueSlider, Preview } from 'reanimated-color-picker';
import { Ball2Icon } from "../../../Icons/Ball2Icon";
import { useEffect, useState } from "react";

interface ColorInputProps {
  label: string;
  value?: any;
  onChange?: (color: Object) => void;
}

export function ColorInput({ label, value, onChange }: ColorInputProps) {
  const [selectedColor, setSelectedColor] = useState(value ?? "#0d9488");

  const onChangeColor = ({ hex }: {hex: string}) => {
    setSelectedColor(hex);
    onChange?.(hex);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <View style={{flexDirection: 'row', width: '100%', gap: 8}}>
      <ColorPickerContainer>

        <ColorPicker value={value} style={{ width: '100%' }} onComplete={onChangeColor} >
          <View
            style={{gap: 12, flexDirection: 'row', flex: 1 }}
          >
            <View style={{width: '100%', gap: 12}}>
              <Panel1 />
              <HueSlider />
            </View>

            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Preview />
              <BallContainer>
                <Ball2Icon
                  height={96}
                  width={96}
                  color={selectedColor}
                />
              </BallContainer>
              </View>


          </View>
        </ColorPicker>

      </ColorPickerContainer>


      </View>

    </Container>
  )
}
