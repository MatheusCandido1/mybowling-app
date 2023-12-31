import { useGroup } from "../../../hooks/useGroupGetAll";
import { useGroups } from "../../../hooks/useGroups";
import { BadgeText, ButtonText, Container, Content, Badge } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export function InvitesButton() {

  const { invites } = useGroup();

  const { handleShowInviteModal } = useGroups();

  const icon = invites.length > 0 ? 'notifications-on' : 'notifications-off';

  return (
    <Container
      style={{
        backgroundColor: invites.length > 0 ? '#FFF' : '#b0b0b0'
      }}
      disabled={invites.length === 0}
      onPress={handleShowInviteModal}
    >
      <Content>
        <ButtonText
          style={{
            color: invites.length > 0 ? '#0fab9e' : '#FFF'
          }}
        >{invites.length > 0 ? 'Invites' : 'No Invites'}</ButtonText>
        {invites.length > 0 && (
          <Badge>
            <BadgeText>{invites.length}</BadgeText>
          </Badge>
        )}
        <MaterialIcons
          name={icon}
          size={24}
          color={invites.length > 0 ? '#0fab9e' : '#FFF'}
        />

      </Content>
    </Container>
  )
}
