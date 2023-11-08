import { Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Header, Overlay } from "./styles";

interface GameDetailsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export function GameDetailsModal({ showModal, setShowModal }: GameDetailsModalProps ) {
  return (
    <Modal
      visible={showModal}
      animationType="fade"
      transparent
      >
        <Overlay>
          <Container>
            <Header>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
              >
                <MaterialCommunityIcons name="close" size={32} color="#000" />
              </TouchableOpacity>
            </Header>

          </Container>
        </Overlay>
      </Modal>
  )
}
