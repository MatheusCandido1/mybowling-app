import { useGroupGetAll } from "../../../hooks/useGroupGetAll";
import { useGroups } from "../../../hooks/useGroups";
import { Container, ActionButton, ActionButtonText, InformationText } from "./styles";

export function EmptyGroups() {

  const { handleShowNewGroupModal, handleShowInviteModal  } = useGroups();

  const { invites } = useGroupGetAll();

  return (
    <Container>
      <InformationText>You are not registered to any group.</InformationText>
      <ActionButton
        onPress={handleShowNewGroupModal}
      >
        <ActionButtonText>Create a group</ActionButtonText>
      </ActionButton>

      <InformationText
        style={{marginTop: 8}}>Or </InformationText>
      <ActionButton
        onPress={handleShowInviteModal}
        disabled={invites.length === 0}
      >
        <ActionButtonText>Accept an invite</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
