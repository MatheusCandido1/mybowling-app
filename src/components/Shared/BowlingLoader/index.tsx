import { useEffect, useRef } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import { Container, HorizontalRow } from "./styles";

export function BowlingLoader() {
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
    <Container>
      <Animated.View
          style={{
            transform: [{ rotate }],
          }}
        >
          <FontAwesome5
            name="bowling-ball"
            size={32}
            color={"#0d9488"}
          />
        </Animated.View>
        <HorizontalRow />
      </Container>
  )
}
