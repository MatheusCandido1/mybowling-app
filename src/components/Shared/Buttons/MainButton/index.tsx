import { ActivityIndicator } from 'react-native';
import { Container, Label } from './styles'

interface MainButtonProps {
  label?: string;
  isLoading?: boolean;
  onPress?: () => void;
}

export function MainButton({ label, isLoading, onPress }: MainButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={isLoading}
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
