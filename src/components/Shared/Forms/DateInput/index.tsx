import { useState } from "react";
import { Container, DateButton, DateText, Label } from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from "../../../../utils/formatDate";

interface DateInputProps {
  onChange?(date: Date): void;
  value?: Date;
  label: string;
}

export function DateInput({ onChange, value, label }: DateInputProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(date);
    onChange?.(date);
  }


  return (
    <>
    <Container>
      <Label>{label}</Label>
      <DateButton
        onPress={showDatePicker}
      >
        <DateText>{formatDate(selectedDate.toString(), 'short')}</DateText>
      </DateButton>
    </Container>

    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
      buttonTextColorIOS="#0d9488"
      textColor="#000"
    />
    </>
  )
}
