import { FlatList, View } from "react-native";
import { Avatar } from "../../Shared/Avatar";
import { Container, Content, MemberRow, Label, ActionButton, Header, HeaderLabel, RoleBadge, RoleBadgeText } from "./styles";

import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useGroup } from "../../../hooks/useGroup";
import { MemberDetailsModal } from "../MemberDetailsModal";
import { EditGroupModal } from "../EditGroupModal";


export function Members() {

  const { showMemberDetailsModal, handleSelectMember, members, isLoggedUserAdmin } = useGroup();

  const Member = ({member}:{member: any}) => (
    <MemberRow>
      <View style={{width: '60%', alignItems:'center', flexDirection: 'row', gap: 8, justifyContent: 'flex-start'}}>
        <Avatar imageUri={member.avatar} />
        <Label>{member.name}</Label>
      </View>
      <View style={{width: '20%', alignItems:'center'}}>
        <RoleBadge
          style={{
            backgroundColor: member.role === 'Admin' ? '#0d9488' : '#0d5d94',
          }}
        >
          <RoleBadgeText>
          {member.role}
          </RoleBadgeText>
        </RoleBadge>
      </View>
         <View style={{width: '20%', alignItems:'flex-end'}}>
         <ActionButton
            onPress={() => handleSelectMember(member)}
         >
           <MaterialCommunityIcons name="account-details" size={18} color="#FFF" />
         </ActionButton>
       </View>

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
            <View style={{width: '20%', alignItems:'flex-end'}}>
            <HeaderLabel>Actions</HeaderLabel>
            </View>
        </Header>
        <FlatList
            data={members}
            keyExtractor={(member: any) => member.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 8, backgroundColor: '#FFF' }} />}
            renderItem={({ item }) => (
              <Member member={item} />
            )}
          />
      </Content>

      {showMemberDetailsModal && <MemberDetailsModal /> }
      <EditGroupModal />
    </Container>
  )
}
