import { TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { InsightsModal } from "../../Game/CurrentGame/InsightsModal/InsightsModal";

interface HeaderProps {
  title: string;
  onPress?: () => void;
}

export function Header({ title, onPress }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <TouchableOpacity
        onPress={onPress}
      >
        <Ionicons name="arrow-back-sharp" size={32} color="#FFF" />
      </TouchableOpacity>
      <Title>{title}</Title>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
      >
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={32}
          color={ showModal ? "#e8b30d" :"#FFF"}
        />
      </TouchableOpacity>
      <InsightsModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  )
}
