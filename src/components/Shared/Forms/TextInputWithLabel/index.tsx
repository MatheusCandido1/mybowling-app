import { Container, Input, Label } from "./styles";

interface TextInputWithLabelProps {
  label: string;
  value?: string;
  onChangeText?(value: string): void;
  placeholder?: string;
}

export function TextInputWithLabel({ label, value, onChangeText, placeholder }: TextInputWithLabelProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </Container>
  )
}
