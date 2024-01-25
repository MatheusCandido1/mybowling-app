import { ActivityIndicator, Modal, TouchableOpacity } from "react-native";
import {
  Overlay,
  Container,
  PopupContainer,
  PopupTitle,
  PopupHeader,
  PopupContent,
  PopupFooter,
  PopupText,
  ConfirmActionButton,
  ConfirmActionButtonText,
  CancelActionButton,
  CancelActionButtonText
 } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ConfirmPopupProps {
  showConfirmPopup: boolean;
  handleCloseConfirmPopup: () => void;
  handleConfirm: () => void;
  title: string;
  text: string;
  confirmText?: string;
  loading?: boolean;

}


export function ConfirmPopup({ showConfirmPopup, handleCloseConfirmPopup, handleConfirm, title, text, confirmText = 'Yes', loading = false }: ConfirmPopupProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={showConfirmPopup}
    >
    <Overlay>
      <Container>
        <PopupContainer>
          <PopupHeader>
            <PopupTitle>{title}</PopupTitle>
            <TouchableOpacity
              onPress={handleCloseConfirmPopup}
              disabled={loading}
            >
              <MaterialCommunityIcons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </PopupHeader>
          <PopupContent>
            <PopupText>{text}</PopupText>
          </PopupContent>
          <PopupFooter>
            <ConfirmActionButton
              onPress={handleConfirm}
              disabled={loading}
              style={{
                backgroundColor: loading ? 'rgba(13, 148, 136, 0.75)' : 'rgba(13, 148, 136, 1)',
              }}
            >
              {loading ? <ActivityIndicator color="#FFF" /> : (
                <ConfirmActionButtonText>{confirmText}</ConfirmActionButtonText>
              )}
            </ConfirmActionButton>
            <CancelActionButton
              onPress={handleCloseConfirmPopup}
              disabled={loading}
            >
              <CancelActionButtonText>Cancel</CancelActionButtonText>
            </CancelActionButton>
          </PopupFooter>
        </PopupContainer>
      </Container>
    </Overlay>
    </Modal>
  )
}
