import { Modal, TouchableOpacity } from "react-native";
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

}


export function ConfirmPopup({ showConfirmPopup, handleCloseConfirmPopup, handleConfirm, title, text, confirmText = 'Yes' }: ConfirmPopupProps) {
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
            >
              <ConfirmActionButtonText>{confirmText}</ConfirmActionButtonText>
            </ConfirmActionButton>
            <CancelActionButton
              onPress={handleCloseConfirmPopup}
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
