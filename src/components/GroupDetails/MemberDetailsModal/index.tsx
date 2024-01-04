import { Modal, TouchableOpacity, Text } from "react-native";
import { Container, Content, Footer, Header, JoinedAt, Overlay, RemoveButton, RemoveButtonText, Title, UserEmail, UserName } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "../../Shared/Avatar";
import { formatDate } from "../../../utils/formatDate";
import { ConfirmPopup } from "../../Shared/ConfirmPopup";
import { useMemberDetailsModalController } from "./useMemberDetailsModalController";

export function MemberDetailsModal() {
   const {
    showConfirmRemovePopup,
    showMemberDetailsModal,
    selectedMember,
    handleCloseMemberDetailsModal,
    handleCloseConfirmDeletePopup,
    handleConfirmDelete,
    handleShowConfirmDeletePopup,
    loggedUser,
    allowRemove
 } = useMemberDetailsModalController();



  return (
    <Modal
      visible={showMemberDetailsModal}
      animationType="fade"
      transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Member</Title>
            <TouchableOpacity onPress={handleCloseMemberDetailsModal}>
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>
          <Content>
            <Avatar size={96} imageUri={selectedMember.avatar} />
            <UserName>{selectedMember.name}</UserName>
            <UserEmail>
              <Text style={{fontWeight: '700'}}>Email: </Text>
              {selectedMember.email}
            </UserEmail>
            <JoinedAt>
              <Text style={{fontWeight: '700'}}>Joined: </Text>
              {formatDate(selectedMember.joined_at)}
            </JoinedAt>
          {allowRemove() && (
            <Footer>
            <RemoveButton
              onPress={handleShowConfirmDeletePopup}
            >
              <RemoveButtonText>Remove</RemoveButtonText>
              <MaterialCommunityIcons name="account-remove" size={24} color="#E83F5B" />
            </RemoveButton>
            </Footer>
          )}

          </Content>
        </Container>
      </Overlay>

      <ConfirmPopup
        showConfirmPopup={showConfirmRemovePopup}
        handleCloseConfirmPopup={handleCloseConfirmDeletePopup}
        handleConfirm={handleConfirmDelete}
        title="Remove User"
        text={loggedUser.id === selectedMember.id ? "Are you sure you want to leave the group?" : `Are you sure you want to remove ${selectedMember.name}?`}
      />


    </Modal>
  )
}
