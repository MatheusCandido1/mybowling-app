import { CheckBoxContainer, Container, TextContainer, CheckBoxText } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface CheckboxProps {
  isSelected: boolean;
  setSelection: (value: boolean) => void;
  text: string;
}

export function Checkbox({  isSelected, setSelection, text }: CheckboxProps) {

  return (
    <Container>
      <CheckBoxContainer
        onPress={() => setSelection(!isSelected)}
      >
        {isSelected ? <MaterialCommunityIcons name="check" size={18} color="#FFF" /> : null}
      </CheckBoxContainer>
      <TextContainer
        onPress={() => setSelection(!isSelected)}
      >
        <CheckBoxText>
          {text}
        </CheckBoxText>
      </TextContainer>

    </Container>
  )
}
