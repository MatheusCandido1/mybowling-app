import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Title, Header } from "./styles";

interface ModalHeaderProps {
  title: string;
  onPress?: () => void;
}

export function ModalHeader({ title, onPress } : ModalHeaderProps) {
  return (
    <Header>
    <Title>
      {title}
    </Title>
    <TouchableOpacity
      onPress={onPress}
    >
      <MaterialCommunityIcons name="close" size={32} color="#000" />
    </TouchableOpacity>
    </Header>
  )
}
