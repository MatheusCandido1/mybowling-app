import {
  Container,
  Content,
  HeaderContainer,
  NewGroupButton,
  NewGroupButtonText,
  GroupsList,
} from './styles';
import { Header } from '../../components/Shared/Header';
import { AntDesign } from "@expo/vector-icons";
import { useGroupsController } from './useGroupsController';
import { NewGroupModal } from '../../components/Groups/NewGroupModal';
import { GroupCard } from '../../components/Groups/GroupCard';
import { GroupDetails } from '../GroupDetails';

interface GroupProps {
  hideGroupPage: () => void;
}


export function Groups({ hideGroupPage }: GroupProps) {
  const {
    groups,
    showNewGroupModal,
    handleShowNewGroupModal,
    handleSelectGroup,
    selectedGroup,
    selectedMenu
  } = useGroupsController();

  function handleBackButtonPress() {
    if(selectedGroup !== null) {
      handleSelectGroup(null);
    } else {
      hideGroupPage();
    }
  }



  return (
    <Container>
    <Header
    title="Groups"
    onPress={handleBackButtonPress}
    />
    {selectedGroup !== null ?
    ( <GroupDetails /> ) : (
      <>
      <Content>
        <HeaderContainer>
          <NewGroupButton
            onPress={handleShowNewGroupModal}
          >
            <NewGroupButtonText>New Group</NewGroupButtonText>
            <AntDesign
              name="addusergroup"
              size={24}
              color="#FFF"
            />
          </NewGroupButton>
        </HeaderContainer>

        <GroupsList>
          {groups.map((group: any) => (
            <GroupCard
              key={group.id}
              name={group.name}
              cover={group.cover}
              description={group.description}
              members={group.members}
              onPress={() => handleSelectGroup(group)}
            />
          ))}
        </GroupsList>

      </Content>

      {showNewGroupModal && (
        <NewGroupModal />
      )}
      </>
    )}
    </Container>
  )
}
