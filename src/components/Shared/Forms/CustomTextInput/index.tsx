import { TextInput, View } from "react-native"

import { Container, Label } from "./styles"
import { EvilIcons } from "@expo/vector-icons";
import {  useState } from "react";

interface CustomTextInputProps {
  label: string;
  icon: 'envelope' | 'lock';
}

export function CustomTextInput({ label, icon }: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <Container>
      <View
        style={{
          height: 14,
        }}
      >
      </View>
      <View
        style={{
          width: '100%',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: -2,
            zIndex: 999,
          }}
        >
          <EvilIcons
            name={icon}
            size={26}
            color={!isFocused ? '#253237' : '#0d9488'}
          />
        </View>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            height: 40,
            borderColor: !isFocused ? '#253237' : '#0d9488',
            borderBottomWidth: 1,
            paddingLeft: 26,
            paddingTop: 4,
            fontSize: 14,
          }}
          placeholder={!isFocused ? label : ''}
          >
        </TextInput>
      </View>
    </Container>
  )
}
