import { TouchableOpacity } from "react-native";
import { Container, Overlay, Header, Form } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FormInput } from "../../Shared/Forms/FormInput";
import { SelectInput } from "../../Shared/Forms/SelectInput";
import { BallSelectInput } from "../../Shared/Forms/BallSelectInput";

export function NewGameModal() {
  return (
    <Overlay>
      <Container>
        <Header>
          <TouchableOpacity>
            <MaterialCommunityIcons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </Header>
        <Form>
          <BallSelectInput />
        </Form>
      </Container>
    </Overlay>
  )
}
