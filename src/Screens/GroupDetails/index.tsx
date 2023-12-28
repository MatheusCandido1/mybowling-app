import { Container, HeaderGroup, HeaderGroupButton, HeaderGroupButtonText, Content, AddMemberContainer, AddMemberText } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGroupDetailsController } from "./useGroupDetailsController";
import { Standinds } from "../../components/GroupDetails/Standings";
import { Members } from "../../components/GroupDetails/Members";
import { Games } from "../../components/GroupDetails/Games";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";

export function GroupDetails() {

  const { selectedMenu, handleSelectMenu, isLoggedUserAdmin, isFetching } = useGroupDetailsController();


  const GroupButton = ({ title, icon }) => {

    return (
      <HeaderGroupButton
        onPress={() => handleSelectMenu(title)}
        style={{
          backgroundColor: selectedMenu === title ? '#0d9488' : '#FFF',
        }}
      >
        <HeaderGroupButtonText
          style={{
            color: selectedMenu === title ? '#FFF' : '#0d9488',
          }}
        >
          {title}
        </HeaderGroupButtonText>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={
            selectedMenu === title ? '#FFF' : '#0d9488'
          }
        />
      </HeaderGroupButton>
    )
  }

  const AddMemberGroupButton = () => {
    return (
      <AddMemberContainer>
        <AddMemberText>
          Member
        </AddMemberText>
        <MaterialCommunityIcons name="account-multiple-plus" size={20} color="#0d9488" />
      </AddMemberContainer>
    )
  }

  if(isFetching) {
    return <OverlayLoading />
  }

  return (
    <Container>
      {selectedMenu === 'Members' && isLoggedUserAdmin ?  <AddMemberGroupButton /> : null}
      <Content>

      <HeaderGroup>
        <GroupButton title='Standings' icon='podium-gold' />
        <GroupButton title='Games' icon='format-list-bulleted' />
        <GroupButton title='Members' icon='account-multiple' />

      </HeaderGroup>
      {selectedMenu === 'Standings' ? <Standinds /> : null}
      {selectedMenu === 'Games' ? <Games /> : null}
      {selectedMenu === 'Members' ? <Members /> : null}
      </Content>

    </Container>
  )
}
