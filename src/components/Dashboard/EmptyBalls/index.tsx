import { useEffect, useRef } from "react";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";
import LottieView from 'lottie-react-native';
import EmptyAnimation from '../../../assets/animations/empty.json';


export function EmptyBalls() {
  const animationRef = useRef<LottieView | null>(); // The <> is

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Container>
       <LottieView
        source={EmptyAnimation}
        autoPlay
        style={{
          width: 200,
          height: 100,
        }}
      />
      <InformationText>You still haven't created any balls</InformationText>
      <ActionButton>
        <ActionButtonText>Add balls to your arsenal!</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
