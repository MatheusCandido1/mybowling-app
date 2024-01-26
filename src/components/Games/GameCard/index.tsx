import { FlatList, View, Text, TouchableOpacity, Button } from "react-native";
import { IFrame } from "../../../entities/Frame";
import { ILocation } from "../../../entities/Location";
import { formatDate } from "../../../utils/formatDate";
import {
  Container,
  Content,
  ScoreContainer,
  DateText,
  Header,
  HeaderText,
  DateBadge,
  Footer,
  SecondFooter,
  UserName,
  DeleteButton,
  DeleteButtonText,
  SwipeContainer,
  EditButton,
  EditButtonText,
  PrintButton,
  PrintButtonText
} from "./styles";
import { Avatar } from "../../Shared/Avatar";
import { formatFrameResult } from "../../../utils/formatScore";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ConfirmPopup } from "../../Shared/ConfirmPopup";
import { useGameCardController } from "./useGameCardController";

interface GameCardProps {
  location: ILocation,
  date: string,
  totalScore: number,
  frames: IFrame[],
  onShowDetails?: () => void;
  user?: any;
  id: string;
}

export function GameCard({ location, date, totalScore, frames, onShowDetails, user, id }: GameCardProps) {

  const {
    showConfirmDelete,
    handleShowConfirmDelete,
    handleHideConfirmDelete,
    swipeableRef,
    handleDeleteGame,
    handleShowEditModal,
  } = useGameCardController();


  function formatFirstShot(frame: IFrame) {
    if(frame.first_shot === 10) return 'X';
    if(frame.first_shot === 0) return '-';
    if(frame.first_shot === null) return '';
    return frame.first_shot;
  }

  const SplitFormat = ({  children }:{children: React.ReactNode}) => {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </View>
    )
  }

  const ScoreColumn = ({ frame }:{frame: IFrame}) => {
    return (
      <View
        style={{
          width: 44,
          height: 64,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text style={{fontWeight: 'bold'}}>{frame.frame_number}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
          {frame.is_split ? (
            <SplitFormat>
              <Text>{formatFirstShot(frame)}</Text>
            </SplitFormat>
          ): (
            <Text>{formatFirstShot(frame)}</Text>
          )}
          <Text>{formatFrameResult(2, frame)}</Text>
          <Text>{formatFrameResult(3, frame)}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>{frame.score}</Text>
        </View>
      </View>
    )
  }

  const LeftSwipeActions = () => {
    return (
      <SwipeContainer>
        <EditButton
          onPress={handleShowEditModal}
        >
          <EditButtonText>Edit</EditButtonText>
          <MaterialCommunityIcons name="playlist-edit" size={20} color="#3eb0f7"  />
        </EditButton>
        <PrintButton>
          <PrintButtonText>PDF</PrintButtonText>
          <FontAwesome5 name="file-pdf" size={20} color="#ffb347"  />
        </PrintButton>
        <DeleteButton
          onPress={handleShowConfirmDelete}
        >
          <DeleteButtonText>Delete</DeleteButtonText>
          <MaterialCommunityIcons name="delete" size={20} color="#D2042D"  />
        </DeleteButton>
      </SwipeContainer>
    )
  };

  return (
    <>
    <ConfirmPopup
      showConfirmPopup={showConfirmDelete}
      title="Delete Game"
      text="Are you sure you want to delete this game?"
      handleConfirm={() => handleDeleteGame(id)}
      handleCloseConfirmPopup={handleHideConfirmDelete}
    />
    <Swipeable
    ref={swipeableRef}
    renderRightActions={LeftSwipeActions}
    rightThreshold={0}
    >
    <Container
      style={{
        height: user ? 180 : 144,
      }}
    >
       <Header>
          <HeaderText>{location.name}</HeaderText>
          <DateBadge>
            <DateText>{formatDate(date)}</DateText>
          </DateBadge>
        </Header>
      <Content>
        <ScoreContainer>
        <FlatList
            data={frames}
            keyExtractor={(item: IFrame) => item.frame_number.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 2, backgroundColor: '#c9ccd1' }} />}
            renderItem={({ item }) => (
              <ScoreColumn
                frame={item}
              />
            )}
          />
        </ScoreContainer>
      </Content>
      <Footer>
        <TouchableOpacity
          onPress={onShowDetails}
        >
          <Text
            style={{
              textDecorationLine: 'underline',
              color: '#0d9488',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            See Details
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <Text style={{fontSize: 14}}>Score:</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{totalScore}</Text>
        </View>
      </Footer>
      {user ? (
        <SecondFooter>
          <Avatar
            imageUri={user.avatar}
          />
          <UserName>{user.name}</UserName>
        </SecondFooter>
      ): null}
    </Container>
    </Swipeable>
    </>
  )
}
