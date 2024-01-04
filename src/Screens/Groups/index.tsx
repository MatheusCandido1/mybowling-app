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
import { useState } from 'react';
import { InvitesModal } from '../../components/Groups/InvitesModal';
import { InvitesButton } from '../../components/Groups/InvitesButton';


export function Groups() {
  const {
    groups,
    showNewGroupModal,
    handleShowNewGroupModal,
    handleGroupPress,
    selectedGroup,
    selectedMenu,
    showInviteModal,
    refreshGroups
  } = useGroupsController();

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
        {}
        <GroupsList>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          onRefresh={refreshGroups}
          refreshing={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={() =>
          <EmptyGroups />
          }
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
