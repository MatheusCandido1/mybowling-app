import { Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Header, Overlay } from "./styles";

interface InsightsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export function InsightsModal({ showModal, setShowModal }: InsightsModalProps ) {
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
