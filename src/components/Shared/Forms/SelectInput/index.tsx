import { Container, Input, Label, ErrorText, ErrorContainer } from "./styles";
import { Select } from "native-base";


interface SelectInputProps {
  label: string;
  error?: string;
  items: any;
}

export function SelectInput({ label, error, items }: SelectInputProps) {
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
     <Select
      placeholder="Select the Location"
      variant="underlined"
     >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
      <ErrorContainer>
        <ErrorText>{error}</ErrorText>
      </ErrorContainer>
    </Container>
  )
}
