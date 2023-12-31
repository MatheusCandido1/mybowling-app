import { ActivityIndicator } from 'react-native';
import { Container, Label } from './styles'

interface SecondaryButtonProps {
  label?: string;
  isLoading?: boolean;
  onPress?: () => void;
}

export function SecondaryButton({ label, isLoading, onPress }: SecondaryButtonProps) {
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
