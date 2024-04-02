import { Animated, View } from "react-native";
import {
  Container,
  ActionsRow,
  ActionTouchable,
  ActionTouchableText,
  NumbersContainer,
  NumbersRow,
  NumberTouchable,
  NumberTouchableText,
} from "./styles";
import { MaterialCommunityIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import React from "react";
import { useGame } from "../../../hooks/useGame";

interface ActionButtonProps {
  onPress?: () => void;
  text?: string;
  icon?: React.ReactNode;
  style?: any;
}

function ActionButton({ onPress, text, icon, style }: ActionButtonProps) {
  return (
    <ActionTouchable
      onPress={onPress}
      activeOpacity={0.4}
      style={style}
    >
      {icon && icon}
      {text &&  (

        <ActionTouchableText>
        {text}
        </ActionTouchableText>
      )}
    </ActionTouchable>
  )
}

interface NumberButtonProps {
  onPress?: () => void;
  value?: string;
  children?: React.ReactNode;
  style?: any;
  textColor?: string;
}

function NumberButton({ onPress, value, children, style, textColor  }: NumberButtonProps) {
  return (
    <NumberTouchable
      onPress={onPress}
      activeOpacity={0.4}
      style={style}
    >
      {value && (
        <NumberTouchableText
          style={{
            color: textColor,
          }}
        >
          {value}
        </NumberTouchableText>
      )}
      {children && children}
    </NumberTouchable>
  )
}

export function NumPad() {
  const {
    closeNumPad,
    updateValueForCurrentFrame,
    currentFrame,
    currentInputNumber
  } = useGame();


  const isEditingInput1 = currentInputNumber === 1;
  const isEditingInput2 = currentInputNumber === 2;
  const isEditingInput3 = currentInputNumber === 3;

  const allowSpareOnFirstShot = false;
  const allowStrikeOnFirstShot = isEditingInput1 ? true : false;


  const allowSpareOnSecondShot = () => {
    if(isEditingInput2) {
      if(currentFrame.frame_number === 10) {
        return Number(currentFrame.first_shot) <= 9;
      } else {
        return currentFrame.first_shot !== 10;
      }
    }
  }

  const allowStrikeOnSecondShot = () => {
    if(isEditingInput2) {
      if(currentFrame.frame_number === 10) {
        return currentFrame.first_shot === 10;
      } else {
        return currentFrame.first_shot === 10;
      }
    }
  }


  const allowSpareOnThirdShot = () => {
    if(isEditingInput3) {
      if(currentFrame.frame_number === 10) {
        if(currentFrame.first_shot === 10) {
          return Number(currentFrame.second_shot) <= 9;
        }
      }
    }
  }

  const allowStrikeOnThirdShot = () => {
    if(isEditingInput3) {
      if(currentFrame.frame_number === 10) {
        return (currentFrame.first_shot === 10 && currentFrame.second_shot === 10) || (Number(currentFrame.first_shot) + Number(currentFrame.second_shot) === 10);
      }
    }
  }


  function handlePressNumber(value: string) {
    updateValueForCurrentFrame(value);
    closeNumPad();
  }

  const allowSpare = allowSpareOnFirstShot || allowSpareOnSecondShot() || allowSpareOnThirdShot();

  const allowStrike = allowStrikeOnFirstShot || allowStrikeOnSecondShot() || allowStrikeOnThirdShot();


  const getMaxNumber = () => {
    if(isEditingInput1) {
      return 10;
    }
    if(isEditingInput2) {
      if((currentFrame.frame_number === 10) && currentFrame.first_shot === 10) {
        return 10;
      } else {
        return (10 - (Number(currentFrame?.first_shot)+1));
      }
    }

    if(isEditingInput3) {
      if(currentFrame.first_shot === 10 && currentFrame.second_shot === 10) return 10

    }
  }

  const maxNumber = getMaxNumber();


  const numPadNumbers = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
  ]

  return (
    <View
    style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }}
    >
    <Animated.View
    style={{
      height: 305,
      width: '100%',
      backgroundColor: '#FFF',
      bottom: 0,
      position: 'absolute',
      zIndex: 9999,
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    }}
  >
    <Container>
      <ActionsRow>
        <ActionButton
          text="Strike"
          icon={<FontAwesome5 name="times" size={18} color="#FFF" />}
          onPress={() => handlePressNumber("Strike")}
          style={{
            backgroundColor: allowStrike ? '#0d9488' : '#E9E9E9',
            borderColor: allowStrike ? '#0d9488' : '#E9E9E9',
            pointerEvents: allowStrike ? 'auto' : 'none',
          }}
        />
         <ActionButton
          text="Spare"
          icon={<MaterialCommunityIcons name="slash-forward" size={18} color="#FFF" />}
          onPress={() => handlePressNumber("Spare")}
          style={{
            backgroundColor: allowSpare ? '#0d9488' : '#E9E9E9',
            borderColor: allowSpare ? '#0d9488' : '#E9E9E9',
            pointerEvents: allowSpare ? 'auto' : 'none',
          }}
        />
        <ActionButton
          text="Empty"
          icon={<AntDesign name="minuscircleo" size={18} color="#FFF" />}
          onPress={() => handlePressNumber("0")}
        />
        <ActionButton
          text="Hide"
          icon={<MaterialCommunityIcons name="chevron-double-down" size={24} color="#FFF" />}
          onPress={closeNumPad}
        />
      </ActionsRow>
      <NumbersContainer>
        {numPadNumbers.map((row, rowIndex) => (
          <NumbersRow key={rowIndex}>
            {row.map((number, columnIndex) => (
              <React.Fragment key={columnIndex}>
                  <NumberButton
                    key={columnIndex}
                    value={number}
                    onPress={() => handlePressNumber(number)}
                    style={{
                      pointerEvents: maxNumber < Number(number) ? 'none' : 'auto',
                    }}
                    textColor={maxNumber < Number(number) ? 'rgba(0, 0, 0, 0.4)' : '#000'}
                  />
              </React.Fragment>
            ))}
          </NumbersRow>
        ))}
      </NumbersContainer>
    </Container>
  </Animated.View>
  </View>
  )
}
