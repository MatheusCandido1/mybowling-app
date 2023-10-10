import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Container, Label } from './styles';

export function DateInput() {
  return (
    <Container>
      <Label>Game date</Label>
      <RNDateTimePicker
        value={new Date()}
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
