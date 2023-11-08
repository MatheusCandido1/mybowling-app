import { ILocation } from "../../../../entities/Location";
import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { Container, Label } from "./styles";
import { Select } from "native-base";

interface SelectInputProps {
  label: string;
  error?: string;
  items: any[];
  onChange?(value: string): void;
  value: string | undefined;
}

export function SelectInput({ label, error, items, onChange, value }: SelectInputProps) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
     <Select
      placeholder="Select the Location"
      variant="underlined"
      onValueChange={(itemValue: string) => onChange && onChange(itemValue)}
      selectedValue={value}
     >
      {items?.map((item: ILocation) => (
        <Select.Item key={item.id.toString()} label={item.name} value={item.id.toString()} />
      ))}
      </Select>
      <ErrorFeedbackInput error={error} />
    </Container>
  )
}
