import { ILocation } from "../../../../entities/Location";
import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { Container, Label } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from "@expo/vector-icons";

interface SelectInputProps {
  label: string;
  error?: string;
  items: any[];
  onChange?(value: string): void;
  value: string | undefined;
  placeholder?: string;
}

export function SelectInput({ label, error, items, onChange, value, placeholder }: SelectInputProps) {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <SelectDropdown
          data={items}
          onSelect={(selectedItem, index) => {
            onChange && onChange(selectedItem.id.toString())
          }}
          defaultButtonText={placeholder ?? "Select an option"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name
          }}
          rowTextForSelection={(item, index) => {
            return item.name
          }}
          dropdownStyle={{
            borderRadius: 8,
          }}
          buttonStyle={{
            width: '100%',
            height: 40,
            borderRadius: 8,
            marginTop: 8,
          }}
          buttonTextStyle={{
            textAlign: 'left',
          }}

          renderDropdownIcon={() => (
            <Entypo name="chevron-down" size={20} color="#000" />
            )}
          />
      <ErrorFeedbackInput error={error} />
    </Container>
  )
}
