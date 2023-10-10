import { Container, Text } from './styles';

interface ErrorFeedbackInputProps {
  error?: string;
}

export function ErrorFeedbackInput({ error }: ErrorFeedbackInputProps) {
  return (
    <Container>
      <Text>{error}</Text>
    </Container>
  )
}
