import { CheckBoxContainer, Container, CheckBoxText } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface CheckboxProps {
  isSelected: boolean;
  setSelection: (value: boolean) => void;
  content: React.ReactNode;
}

export function Checkbox({  isSelected, setSelection, content }: CheckboxProps) {

  return (
    <Container>
      <CheckBoxContainer
        onPress={() => setSelection(!isSelected)}
      >
        {isSelected ? <MaterialCommunityIcons name="check" size={18} color="#FFF" /> : null}
      </CheckBoxContainer>
        <CheckBoxText>
          {content}
        </CheckBoxText>

    </Container>
  )
}
