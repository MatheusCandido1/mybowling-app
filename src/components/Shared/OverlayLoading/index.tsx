import { Container, HorizontalRow } from "./styles";
import { useEffect, useRef } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';

interface OverlayLoadingProps {
  style?: 'light' | 'dark';
}

export function OverlayLoading({ style = 'dark' }: OverlayLoadingProps) {

  const spinValue = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(spin);
    };

    spin();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container
      style={{
        backgroundColor: style === 'light' ? "#FFF" : "#0d9488",
      }}
    >
      <Animated.View
        style={{
          transform: [{ rotate }],
        }}
      >
        <FontAwesome5
          name="bowling-ball"
          size={40}
          color={style === 'light' ? "#0d9488" : "#FFF"}
        />
      </Animated.View>
      <HorizontalRow />
      </Container>
  )
}
