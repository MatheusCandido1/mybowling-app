import { Container, HeaderGroup, HeaderGroupButton, HeaderGroupButtonText, Content, AddMemberContainer, AddMemberText } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useGroupController } from "./useGroupController";
import { Standings } from "../../components/GroupDetails/Standings";
import { Members } from "../../components/GroupDetails/Members";
import { Games } from "../../components/GroupDetails/Games";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { Header } from "../../components/Shared/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useGroupDetails } from "../../hooks/useGroupDetails";
import { useGroupShow } from "../../hooks/useGroupShow";

interface GroupProps {
  id: number;
}

export function Group({ id }: GroupProps) {
  const {
    selectedMenu,
    handleSelectMenu,
    groupDetail,
    isFetching,
    isLoggedUserAdmin
  } = useGroupController(id);

  const navigation = useNavigation();

  function handleBackButtonPress() {
    navigation.goBack();
  }

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


  return (
    <>
    {isFetching ? <OverlayLoading /> : (
        <Container>
        <Header
        title="Group"
        onPress={handleBackButtonPress}
        />
        {selectedMenu === 'Members' ?  <AddMemberGroupButton /> : null}
          <Content>

        <HeaderGroup>
          <GroupButton title='Standings' icon='podium-gold' />
          <GroupButton title='Games' icon='format-list-bulleted' />
          <GroupButton title='Members' icon='account-multiple' />

        </HeaderGroup>

        {selectedMenu === 'Standings' ? <Standings standings={groupDetail.standings} /> : null}
        {selectedMenu === 'Members' ? <Members members={groupDetail.members} isLoggedUserAdmin /> : null}
        {selectedMenu === 'Games' ? <Games groupId={groupDetail.group.id} /> : null}



        </Content>
        </Container>
    )}
    </>

  )
}
