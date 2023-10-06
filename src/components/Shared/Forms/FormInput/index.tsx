import { Container, Label, ErrorText, ErrorContainer } from "./styles";
import { TextInputProps } from "react-native";
import { Input } from "native-base";

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export function FormInput({ label, error }: FormInputProps) {
  const highlightColor = !error ? "#0d9488": "#940d19";

  return (
    <Container>
      <Label
        style={{
          color: highlightColor,
        }}
      >
        {label}
      </Label>
      <Input
        variant="underlined"
        placeholder="Enter the E-mail"
      />
      <ErrorContainer>
        <ErrorText>{error}</ErrorText>
      </ErrorContainer>
    </Container>
  )
}
