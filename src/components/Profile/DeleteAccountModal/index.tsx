import { Modal, TouchableOpacity, Text } from "react-native";
import { Container, Content, DeleteAccountSubtitle, DeleteAccountTitle, DeleteButton, DeleteButtonText, DeleteInput, DeleteInputContainer, DeleteInputFootNote, Header, Overlay, Title,  } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDeleteAccountModalController } from "./useDeleteAccountModalController";


export function DeleteAccountModal() {
  const {
    showDeleteAccountModal,
    handleCloseDeleteAccountModal,
    confirmation,
    handleConfirmationChange,
    handleDeleteAccount
  } = useDeleteAccountModalController();

  return (
    <Modal
      visible={showDeleteAccountModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Account Settings</Title>
            <TouchableOpacity onPress={handleCloseDeleteAccountModal}>
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Content>
            <DeleteAccountTitle>
              Are you sure you want to delete your account?
            </DeleteAccountTitle>
            <DeleteAccountSubtitle>
              Once you delete your account, all your games, splits, groups and friends will be lost.
            </DeleteAccountSubtitle>
            <DeleteInputContainer>
              <DeleteInput
                value={confirmation}
                onChangeText={handleConfirmationChange}
                autoCapitalize='none'
              />
              <DeleteInputFootNote>
                  Type {''}
                  <Text style={{fontWeight: 'bold'}}>
                    "delete account"
                  </Text>
                  {''} to confirm.
              </DeleteInputFootNote>
            </DeleteInputContainer>
            <DeleteButton
              disabled={confirmation !== 'delete account'}
              style={{
                backgroundColor: confirmation === 'delete account' ? '#D2042D' : '#D3D3D3'
              }}
              onPress={handleDeleteAccount}
            >
              <DeleteButtonText>Delete Account</DeleteButtonText>
            </DeleteButton>

          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
