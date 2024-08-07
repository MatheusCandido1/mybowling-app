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
  disabled?: boolean;
  initialLabel?: string;
  selectRef?: any;
}

interface Item {
  id: string;
  name: string;
}

export function SelectInput({ label, error, items, onChange, value, showReset, disabled, initialLabel, selectRef }: SelectInputProps) {
  function handleSelect(value: { id: string; name: string; }) {
    onChange && onChange(value.id.toString(), value)
  }

  function handleReset() {
    selectRef.current.reset()
    onChange && onChange('', null)
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
          disabled={disabled}
          data={items}
          onSelect={(selectedItem, index) => {
            handleSelect(selectedItem)
          }}
          defaultButtonText={initialLabel ? initialLabel : ((value?.name) ? value?.name : value)}
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
            backgroundColor: disabled ? '#bfbfc0' : '#efeff0',
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
