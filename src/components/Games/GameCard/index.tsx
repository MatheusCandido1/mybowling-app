import { FlatList, View, Text, TouchableOpacity } from "react-native";
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
  UserName
} from "./styles";
import { Avatar } from "../../Shared/Avatar";

interface GameCardProps {
  location: ILocation,
  date: string,
  totalScore: number,
  frames: IFrame[],
  onShowDetails?: () => void;
  user?: any;
}

export function GameCard({ location, date, totalScore, frames, onShowDetails, user }: GameCardProps) {

  function splitConverted(frame: IFrame) {
    if(frame.is_split && frame.points === 10) return true;
  }

  function formatFirstShot(frame: IFrame) {
    if(frame.first_shot === 10) return 'X';
    if(frame.first_shot === 0) return '-';
    if(frame.first_shot === null) return '';
    return frame.first_shot;
  }

  function formatSecondShot(frame: IFrame) {
    if(frame.frame_number === 10) {
      if(frame.second_shot === 10) return 'X';
      if(frame.second_shot === 0) return '-';
      if(frame.second_shot === null) return '';
      return frame.second_shot;
    } else {
      if(frame.first_shot === 10) return '';
      if(frame.second_shot === 10 || (frame.points === 10) ) return '/';
      if(frame.second_shot === 0) return '-';
      if(frame.second_shot === null) return '';
      return frame.second_shot;
    }
  }

  function formatThirdShot(frame: IFrame) {
    if(frame.third_shot === 10) return 'X';
    if(frame.third_shot === 0) return '-';
    if(frame.third_shot === null) return '';
    return frame.third_shot;
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
        <View style={{flexDirection: 'row', gap: 4, justifyContent: 'center', alignItems: 'center'}}>
          {frame.is_split ? (
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
              <Text>{formatFirstShot(frame)}</Text>
            </View>
          ): ( <Text>{formatFirstShot(frame)}</Text> )}
          {frame.second_shot ? <Text>{formatSecondShot(frame)}</Text> : null}
          {frame.frame_number === 10 ? <Text>{formatThirdShot(frame)}</Text> : null}
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>{frame.score}</Text>
        </View>
      </View>
    )
  }

  return (
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
  )
}
