import { FlatList, View } from "react-native";
import { Avatar } from "../../Shared/Avatar";
import { Container, Content, MemberRow, Label, ActionButton, Header, HeaderLabel, RoleBadge, RoleBadgeText } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useGroupDetailsController } from "../../../Screens/GroupDetails/useGroupDetailsController";


export function Members() {
  const { groupDetail, isLoggedUserAdmin } = useGroupDetailsController();


  const [members,] = useState(groupDetail.members);


  const Member = ({name, role, avatar}:{name: string, role: string, avatar: string}) => (
    <MemberRow>
      <View style={{width: '60%', alignItems:'center', flexDirection: 'row', gap: 8, justifyContent: 'flex-start'}}>
        <Avatar imageUri={avatar} />
        <Label>{name}</Label>
      </View>
      <View style={{width: '20%', alignItems:'center'}}>
        <RoleBadge
          style={{
            backgroundColor: role === 'Admin' ? '#0d9488' : '#0d5d94',
          }}
        >
          <RoleBadgeText>
          {role}
          </RoleBadgeText>
        </RoleBadge>
      </View>
      {isLoggedUserAdmin ? (
         <View style={{width: '20%', alignItems:'flex-end'}}>
         <ActionButton>
           <MaterialCommunityIcons name="account-edit" size={18} color="#FFF" />
         </ActionButton>
       </View>
      ): null}

    </MemberRow>
  )

  return (
    <Container>
      <Content>
        <Header>
          <View style={{width: '60%', alignItems:'center'}}>
            <HeaderLabel>Player</HeaderLabel>
          </View>

          <View style={{width: '20%', alignItems:'center'}}>
            <HeaderLabel>Role</HeaderLabel>
          </View>
          {isLoggedUserAdmin ? (
            <View style={{width: '20%', alignItems:'flex-end'}}>
            <HeaderLabel>Actions</HeaderLabel>
            </View>
          ): null}
        </Header>
        <FlatList
            data={members}
            keyExtractor={(member: any) => member.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 8, backgroundColor: '#FFF' }} />}
            renderItem={({ item }) => (
              <Member name={item.name} role={item.role} avatar={item.avatar} />
            )}
          />
      </Content>
    </Container>
  )
}
