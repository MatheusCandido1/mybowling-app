import { ILocation } from "../../../../entities/Location";
import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { Container, Input, Label } from "./styles";
import { Select } from "native-base";


interface SelectInputProps {
  label: string;
  error?: string;
  items?: ILocation[];
}

export function SelectInput({ label, error, items }: SelectInputProps) {
  const highlightColor = !error ? "#0d9488": "#940d19";

  return (
    <Container>
      <Label>
        {label}
      </Label>
     <Select
      placeholder="Select the Location"
      variant="underlined"
     >
      {items?.map((item: ILocation) => (
         <Select.Item key={item.id} label={item.name} value={item.id} />
      ))}
      </Select>
      <ErrorFeedbackInput error={error} />
    </Container>
  )
}
