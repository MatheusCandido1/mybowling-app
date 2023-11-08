import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Container, Label } from './styles';
import { useState } from 'react';

interface DateInputProps {
  onChange?(date: Date): void;
  value?: Date;
}

export function DateInput({ onChange, value }: DateInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());


  const handleSetDate = (event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      onChange?.(date);
    }
  };

  return (
    <Container>
      <Label>Game date</Label>
      <RNDateTimePicker
        onChange={handleSetDate}
        value={value ? new Date(value) : new Date()}
        mode="date"
        display="default"
        style={{
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginTop: 8,
          marginLeft: -12,
        }}
        accentColor='#0d9488'
        textColor='#0d9488'
      />
    </Container>
  )
}
