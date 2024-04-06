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
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { EmptyGroups } from '../../components/Groups/EmptyGroups';
import { InvitesModal } from '../../components/Groups/InvitesModal';
import { InvitesButton } from '../../components/Groups/InvitesButton';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { BowlingLoader } from '../../components/Shared/BowlingLoader';



export function Groups({ showInvites}: { showInvites: boolean}) {

  const {
    groups,
    showNewGroupModal,
    handleShowNewGroupModal,
    handleGroupPress,
    showInviteModal,
    refreshGroups,
    handleShowInviteModal,
    invites,
    isFetchingGroups
  } = useGroupsController();

  useEffect(() => {
    if (showInvites) {
      if(invites.length > 0) {
      handleShowInviteModal();
      } else {
        Toast.show({
          type: 'warning',
          text1: 'Invites',
          text2: 'There are no invites available.',
          visibilityTime: 2000,
          autoHide: true,
        });
      }
      return;
    }
  }, [showInvites]);

  const navigation = useNavigation();

  function handleBackButtonPress() {
    navigation.goBack();
  }

  return (
    <Container>
    <Header
      title="Groups"
      onPress={handleBackButtonPress}
    />
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
        {isFetchingGroups ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BowlingLoader />
          </View>
        ) : null}

        {groups.length === 0 && !isFetchingGroups && <EmptyGroups />}
        <GroupsList>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          onRefresh={refreshGroups}
          refreshing={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) => (
            <GroupCard
              name={item.name}
              description={item.description}
              members={item.members}
              onPress={() => handleGroupPress(item)}
            />
          )}
        /></GroupsList>

      </Content>

      <InvitesButton />


      {showNewGroupModal && (
        <NewGroupModal />
      )}
      {showInviteModal && (
        <InvitesModal />
      )}

    </Container>
  )
}
