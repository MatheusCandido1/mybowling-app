import { useEffect, useRef, useState } from "react";
import { Container, HorizontalRow } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';


export function Splash() {
  const rollTo = useRef(new Animated.Value(-125)).current;
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


  useEffect(() => {
    const release = () => {
      Animated.timing(rollTo, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    };

    release();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <Animated.View
        style={{
          marginLeft: rollTo,
          transform: [{ rotate }],
        }}
      >
        <FontAwesome5
          name="bowling-ball"
          size={40}
          color="#0d9488"
        />
      </Animated.View>
      <HorizontalRow />
    </Container>
  )
}
