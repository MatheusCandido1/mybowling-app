import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { Container, Label } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

interface SelectInputProps {
  label: string;
  error?: string;
  items: any[];
  onChange?(value: string, item?: Item): void;
  value: string | null;
  placeholder?: string;
  searchPlaceholder?: string;
}

interface Item {
  id: string;
  name: string;
}

export function SelectInput({ label, error, items, onChange, value, placeholder, searchPlaceholder }: SelectInputProps) {

  function handleSelect(value: { id: string; name: string; }) {
    onChange && onChange(value.id.toString(), value)
  }

  return (
    <Container>
      <Label>
        {label}
      </Label>
      <SelectDropdown
          data={items}
          search
          searchPlaceHolder={searchPlaceholder}
          onSelect={(selectedItem, index) => {
            handleSelect(selectedItem)
          }}
          defaultButtonText={value?.name}
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
