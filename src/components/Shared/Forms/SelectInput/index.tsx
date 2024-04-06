import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { Container, Label, LabelContainer, Link, LinkText } from "./styles";
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from "@expo/vector-icons";
import { useRef, useState } from "react";

interface SelectInputProps {
  label: string;
  error?: string;
  items: any[];
  onChange?(value: string, item?: Item): void;
  value: string | null;
  placeholder?: string;
  searchPlaceholder?: string;
  showReset?: boolean;
}

interface Item {
  id: string;
  name: string;
}

export function SelectInput({ label, error, items, onChange, value, showReset }: SelectInputProps) {

  const selectRef = useRef(null)

  function handleSelect(value: { id: string; name: string; }) {
    onChange && onChange(value.id.toString(), value)
  }

  function handleReset() {
    selectRef.current.reset()
  }


  return (
    <Container>
      <LabelContainer>
        <Label>
          {label}
        </Label>
        {(showReset) && (
        <Link onPress={handleReset}>
          <LinkText style={{textDecorationColor: '#0d9488'}}> Reset </LinkText>
        </Link>
        )}

      </LabelContainer>
      <SelectDropdown
          ref={selectRef}
          data={items}
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
