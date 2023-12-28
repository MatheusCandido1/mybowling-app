import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Container, Label } from './styles';
import { Text } from 'react-native';

interface CircularProgressProps {
  percentage: number;
  label?: string;
}


export function CircularProgress({ percentage, label }: CircularProgressProps) {
  return (
    <Container>
      <AnimatedCircularProgress
      size={80}
      width={5}
      fill={percentage}
      tintColor="#0d9488"
      tintTransparency={true}
      backgroundColor='#cee9e7'

          >
          {
            (fill) => (
              <Text
                style={{
                  color: '#0d9488',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                { percentage }%
              </Text>
            )
          }
        </AnimatedCircularProgress>
      <Label>{label}</Label>
    </Container>
  )
}
