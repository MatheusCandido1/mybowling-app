import { Header } from "../../components/Shared/Header";
import {
  Container,
  Content,
  HeaderContainer,
  NewBallButton,
  NewBallButtonText,
  BallItemContainer,
  BallItemInformationContainer,
  BallItemIconContainer,
  BallItemText
} from "./styles";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { NewBallModal } from "../../components/Arsenal/NewBallModal";
import { useArsenalController } from "./useArsenalController";
import { BallIcon } from "../../components/Icons/BallIcon";
import { FlatList, View } from "react-native";
import { IBall } from "../../entities/Ball";
import { Ball2Icon } from "../../components/Icons/Ball2Icon";
import { EditBallModal } from "../../components/Arsenal/EditBallModal";
import { useNavigation } from "@react-navigation/native";
import { EmptyBalls } from "../../components/Dashboard/EmptyBalls";
import { EmptyArsenal } from "../../components/Arsenal/EmptyArsenal";
import { RefreshControl } from "react-native-gesture-handler";

export function Arsenal() {
  const navigation = useNavigation();

  const {
    showNewBallModal,
    handleShowNewBallModal,
    balls,
    isFetching,
    showEditBallModal,
    handleShowEditBallModal,
    refetch
  } = useArsenalController();

  const BallItem = ({ ball }: {ball: IBall}) => {
    return (
      <BallItemContainer
        onPress={() => handleShowEditBallModal(ball)}
      >
        <BallItemIconContainer>
          <Ball2Icon height={48} width={48} color={ball.color} />
        </BallItemIconContainer>
        <BallItemInformationContainer>
          <BallItemText>{ball.name}</BallItemText>
          <BallItemText>{ball.weight} lbs</BallItemText>


        </BallItemInformationContainer>

      </BallItemContainer>
    );
  }

  const Loading = () => {
    return (
      <View style={{flex: 1}} >
        <OverlayLoading />
      </View>
    )
  }


  return (
      <Container>
      <Header
        title="Arsenal"
        onPress={() => navigation.goBack()}
      />
      <Content>

      <HeaderContainer>
        <NewBallButton
          onPress={handleShowNewBallModal}
        >
          <NewBallButtonText>New Ball</NewBallButtonText>
          <BallIcon height={24} width={24} color={"#FFF"} />
        </NewBallButton>
        </HeaderContainer>

        <View style={{height: 16}} />
        {balls.length === 0 && <EmptyArsenal />}

        {isFetching ? (
          <OverlayLoading style="light" />
        ): (
          <FlatList
          data={balls}
          keyExtractor={item => item.id}
          renderItem={({item}) => <BallItem ball={item} />}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={refetch}
              colors={["gray","orange"]}
            />
          }
          />

        )}


      </Content>
      { showNewBallModal ? <NewBallModal /> : null}
      { showEditBallModal ? <EditBallModal /> : null}
      </Container>
  )
}
