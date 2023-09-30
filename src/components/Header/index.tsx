import { Modal, TouchableOpacity, View } from "react-native";
import { Container, Title } from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { InsightsModal } from "../InsightsModal/InsightsModal";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <TouchableOpacity>
        <Ionicons name="arrow-back-sharp" size={32} color="#000" />
      </TouchableOpacity>
      <Title>{title}</Title>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
      >
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={32}
          color={ showModal ? "#e8b30d" :"#000"}
        />
      </TouchableOpacity>
      <InsightsModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Container>
  )
}
