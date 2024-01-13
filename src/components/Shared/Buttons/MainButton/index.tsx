import { ActivityIndicator } from 'react-native';
import { Container, Label } from './styles'

interface MainButtonProps {
  label?: string;
  isLoading?: boolean;
  onPress?: () => void;
  style?: object;
}

export function MainButton({ label, isLoading, onPress, style }: MainButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={isLoading}
      style={style}
    >
      {isLoading ? (
         <ActivityIndicator
         accessibilityLabel="Loading posts"
         color="#FFF"
       />
      ) : (
        <Label>{label}</Label>
      )}
    </Container>
  )
}
