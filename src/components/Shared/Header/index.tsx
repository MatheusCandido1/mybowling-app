import { TouchableOpacity, View } from "react-native";
import { Container, LeftContainer, MiddleContainer, RightContainer, Title } from "./styles";
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
      <LeftContainer>
        <TouchableOpacity
          onPress={onPress}
        >
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </TouchableOpacity>
      </LeftContainer>
      <MiddleContainer>
        <Title>{title}</Title>
      </MiddleContainer>
      <RightContainer></RightContainer>
    </Container>
  )
}
