import { Container, HeaderGroup, HeaderGroupButton, HeaderGroupButtonText, Content, AddMemberContainer, AddMemberText, EditGroupButton, EditGroupButtonText, FiltersContainer, FiltersText } from "./styles";
import { MaterialCommunityIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useGroupController } from "./useGroupController";
import { Standings } from "../../components/GroupDetails/Standings";
import { Members } from "../../components/GroupDetails/Members";
import { Games } from "../../components/GroupDetails/Games";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { Header } from "../../components/Shared/Header";
import { useNavigation } from "@react-navigation/native";
import { InviteMemberPopup } from "../../components/GroupDetails/InviteMemberPopup";


export function Group() {
  const {
    selectedMenu,
    handleSelectMenu,
    groupDetail,
    isFetching,
    isLoggedUserAdmin,
    handleShowInviteMemberPopup,
    showInviteMemberPopup,
    handleCloseInviteMemberPopup,
    handleShowEditGroupModal,
    handleShowFilterGamesModal
  } = useGroupController();

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

  const FilterButton = () => {
    return (
      <FiltersContainer
        onPress={handleShowFilterGamesModal}
      >
        <FiltersText>
          Filters
        </FiltersText>
        <Ionicons name="options" size={24} color="#0d9488" />
      </FiltersContainer>
    )
  }

  const AddMemberGroupButton = () => {
    return (
      <AddMemberContainer
        onPress={handleShowInviteMemberPopup}
      >
        <AddMemberText>
          Member
        </AddMemberText>
        <MaterialCommunityIcons name="account-multiple-plus" size={20} color="#0d9488" />
      </AddMemberContainer>
    )
  }

  const EditGroup = () => {
    return (
    <EditGroupButton
      onPress={handleShowEditGroupModal}
    >
      <FontAwesome name="pencil-square-o" size={24} color="#FFF" />
      <EditGroupButtonText>Edit Group</EditGroupButtonText>
    </EditGroupButton>
  )
    }


  return (
    <>
    {isFetching ? <OverlayLoading /> : (
        <Container>
        <InviteMemberPopup
          showInviteMemberPopup={showInviteMemberPopup}
          handleCloseInviteMemberPopup={handleCloseInviteMemberPopup}
        />
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
        {(isLoggedUserAdmin && selectedMenu === 'Members') && (
          <>
        <AddMemberGroupButton />
        <EditGroup />
        </>
        )}

        {selectedMenu === 'Games' && <FilterButton />}

        {selectedMenu === 'Standings' ? <Standings /> : null}
        {selectedMenu === 'Members' ? <Members /> : null}
        {selectedMenu === 'Games' ? <Games /> : null}



        </Content>
        </Container>
    )}
    </>

  )
}
