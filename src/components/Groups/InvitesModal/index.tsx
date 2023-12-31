import { Modal, TouchableOpacity, Image, View } from "react-native";
import {
  AcceptInviteButton,
  AcceptInviteButtonText,
  Container,
  Content,
  Header,
  InviteContainer,
  InviteFooter,
  InviteHeader,
  InviteHeaderText,
  InviteImage,
  InviteInformation,
  InviteSubTitle,
  InviteTitle,
  Overlay,
  RejectInviteButton,
  RejectInviteButtonText,
  Title
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useInvitesModalController } from "./useInvitesModalController";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "../../Shared/Avatar";

export function InvitesModal() {

  const { invites, showInviteModal, handleCloseInviteModal, handleSubmit } = useInvitesModalController();


  return (
    <Modal
    visible={showInviteModal}
    animationType="fade"
    transparent
    >
      <Overlay>
        <Container>
          <Header>
            <Title>Invites</Title>
            <TouchableOpacity
            onPress={handleCloseInviteModal}
            >
              <MaterialCommunityIcons name="close" size={32} color="#000" />
            </TouchableOpacity>
          </Header>

          <Content>
            <FlatList
              data={invites}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <InviteContainer>
                  <InviteHeader>
                    <Avatar
                      imageUri={item.owner.avatar}
                    />
                    <InviteHeaderText>
                      {item.owner.name} invited you 😁
                    </InviteHeaderText>

                  </InviteHeader>
                  <InviteImage>
                    <Image
                      source={{
                        uri: item.cover,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                        overflow: 'hidden',
                      }}
                    />
                  </InviteImage>
                  <InviteInformation>
                    <InviteTitle>{item.name}</InviteTitle>
                    <InviteSubTitle>{item.description}</InviteSubTitle>

                  </InviteInformation>
                  <InviteFooter>
                    <RejectInviteButton
                      onPress={() => handleSubmit(item.id, 'decline')}
                    >
                      <MaterialCommunityIcons name="close" size={24} color="#fff" />
                      <RejectInviteButtonText>Reject</RejectInviteButtonText>
                    </RejectInviteButton>
                    <AcceptInviteButton
                      onPress={() => handleSubmit(item.id, 'accept')}
                    >
                      <MaterialCommunityIcons name="check" size={24} color="#fff" />
                      <AcceptInviteButtonText>Accept</AcceptInviteButtonText>
                    </AcceptInviteButton>

                  </InviteFooter>

                </InviteContainer>
              )}


            />

          </Content>

        </Container>
      </Overlay>
    </Modal>
  )
}
