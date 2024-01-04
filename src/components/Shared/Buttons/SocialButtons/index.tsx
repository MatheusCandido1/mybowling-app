import { SocialButton, SocialButtonsContainer } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export function  SocialButtons() {
  return (
    <SocialButtonsContainer>
      <SocialButton>
        <AntDesign name="google" size={24} color="#c71610" />
      </SocialButton>
      <SocialButton>
        <AntDesign name="apple1" size={24} color="black" />
      </SocialButton>
    </SocialButtonsContainer>

  )
}
