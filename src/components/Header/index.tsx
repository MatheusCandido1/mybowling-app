import { TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <TouchableOpacity>
        <Ionicons name="arrow-back-sharp" size={32} color="#000" />
      </TouchableOpacity>
      <Title>{title}</Title>
      <TouchableOpacity>
        <MaterialCommunityIcons name="lightbulb-on-outline" size={32} color="#000" />
      </TouchableOpacity>
    </Container>
  )
}
