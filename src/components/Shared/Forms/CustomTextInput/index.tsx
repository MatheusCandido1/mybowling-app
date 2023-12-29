import {  TextInput, View } from "react-native"
import { EvilIcons } from "@expo/vector-icons";
import {  useState, forwardRef } from "react";

interface CustomTextInputProps {
  label: string;
  icon: 'envelope' | 'lock' | 'navicon' | 'user' ;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  multiline?: boolean;
  lines?: number;
}

export function CustomTextInput({ label, icon, value, onChangeText, isPassword, multiline, lines }: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <>
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
          multiline={multiline}
          numberOfLines={lines}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword}
          style={{
            borderColor: !isFocused ? '#253237' : '#0d9488',
            borderBottomWidth: 1,
            paddingLeft: 26,
            paddingTop:  multiline ? 10:4,
            fontSize: 14,
            height: multiline ? 75 : 40,
            textAlignVertical: 'top',
          }}
          autoCapitalize='none'
          placeholder={!isFocused ? label : ''}
          value={value}
          onChangeText={onChangeText}
          >
        </TextInput>
      </View>
    </>
  )
}
