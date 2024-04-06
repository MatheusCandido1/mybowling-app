import { Modal, TouchableOpacity } from "react-native";
import {
  Overlay,
  Container,
  PopupContainer,
  PopupTitle,
  PopupHeader,
  PopupContent,
  PopupText,
  PopupFooter,
  PopupButton,
  PopupButtonText,
 } from "./styles";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNewVersionAvailablePopupController } from "./useNewVersionAvailablePopupController";


export function NewVersionAvailablePopup() {

  const {
    apiVersion,handleUpdateApp
  } = useNewVersionAvailablePopupController();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={true}
    >
    <Overlay>
      <Container>
        <PopupContainer>
          <PopupHeader>
            <PopupTitle>New Version Available</PopupTitle>
          </PopupHeader>
          <PopupContent>
            <PopupText>
              A new version of the app is available. Please update to the latest version.
            </PopupText>
          </PopupContent>
        <PopupFooter>
          <PopupButton onPress={handleUpdateApp}>
            <PopupButtonText>Get {apiVersion} version on </PopupButtonText>
            <FontAwesome5 name="app-store-ios" size={24} color="#0d9488" />
          </PopupButton>
        </PopupFooter>
        </PopupContainer>
      </Container>
    </Overlay>
    </Modal>
  )
}
