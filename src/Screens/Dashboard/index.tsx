import {
  Container,
  HeaderContainer,
  Content,
  DateContainer,
  IconContainer,
  HelloText,
  AverageContainer,
  AverageCard,
  AverageCardTitle,
  AverageText,
  Navbar,
  Title,
  StatsContainer,
  ArsenalStatsCard,
  AllTimeScoreCard,
  ArsenalStatsCardTitle,
  BallContainer,
  SplitsContainer,
  SplitItemContainer,
  SplitStatsContainer,
  SplitTitleContainer,
  SplitTitle,
  GroupsContainer,
  GroupContainerTitle
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useDashboardController } from "./useDashboardController";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { Ball2Icon } from "../../components/Icons/Ball2Icon";
import { IBall } from "../../entities/Ball";
import { formatBallName } from "../../utils/formatBallName";
import Swiper from 'react-native-swiper'
import { SplitFrame } from "../../components/Dashboard/SplitFrame";
import { useAuth } from "../../hooks/useAuth";
import { EmptyBalls } from "../../components/Dashboard/EmptyBalls";
import { Avatar } from "../../components/Shared/Avatar";
import { EmptySplits } from "../../components/Dashboard/EmptySplits";
import { useNavigation } from "@react-navigation/native";


export function Dashboard() {

  const navigation = useNavigation();

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const { stats, isLoading } = useDashboardController();
  const { loggedUser } = useAuth();

  const user = {
    first_name: loggedUser?.name.split(' ')[0],
  }

  const arsenal = stats.most_used_balls || [];
  const totalGamesAllTime = stats.total_games;
  const highScoreAllTime = stats.highest_score;

  const splits_converted = stats.splits_converted || [];

  function navigateToGroups() {
    navigation.navigate('GroupStack', {screen: 'groups'});
  }

  const Header = () => {
    return (
      <Navbar>
        <HeaderContainer>
          <DateContainer>
            <HelloText>Hello, {user.first_name} 👋</HelloText>
            <Text style={{color: 'white'}}>Let's Bowl!</Text>
          </DateContainer>
          <IconContainer>
            <GroupsContainer
              onPress={navigateToGroups}
            >
              <MaterialIcons name="group" size={30} color="#0d9488" />
              <GroupContainerTitle>
                Groups
              </GroupContainerTitle>

            </GroupsContainer>
            <MaterialIcons name="notifications-none" size={30} color="white" />

          </IconContainer>
        </HeaderContainer>
        <Average />
      </Navbar>
    )
  }

  const Average = () => {
    return (
      <AverageContainer>
        <AverageCard>
          <AverageCardTitle>{currentMonth} Average</AverageCardTitle>
          <View style={{alignItems: 'center', gap: 2}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <AverageText>{stats.current_month_average}</AverageText>
              {stats.current_month_average > stats.last_month_average ? (
                  <MaterialIcons name="arrow-drop-up" size={30} color="green" />
               ) : (
                  <MaterialIcons name="arrow-drop-down" size={30} color="red" />
               )}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 10}}>Last month average:</Text>
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>{stats.last_month_average}</Text>
            </View>
          </View>
        </AverageCard>
        <AverageCard>
          <AverageCardTitle>All Time Average</AverageCardTitle>
          <AverageText>{stats.all_time_average}</AverageText>
        </AverageCard>
      </AverageContainer>
    )
  }

  interface BallItemProps {
    ball: IBall;
    totalScore: number;
    totalGames: number;
    index: number;
  }


  const BallItem = ({ ball, totalScore, totalGames, index } : BallItemProps) => {
    const percentage = (totalGames / totalGamesAllTime) * 100;
    return (
        <BallContainer>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Rank #{index+1} - {Math.round(percentage)}% </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Ball2Icon
                height={48}
                width={48}
                color={ball.color}
              />
              <View>
                <Text>Games: <Text style={{fontWeight:'bold'}}>{totalGames}/{totalGamesAllTime}</Text></Text>
                <Text>Points: <Text style={{fontWeight:'bold'}}>{totalScore}</Text></Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 8}}>
              <Text>{formatBallName(ball)}</Text>
            </View>
        </BallContainer>
    )
  }

  interface SplitItemProps {
    split: string;
    attempts: number;
    converted: number;
    rate: number;
  }

  const SplitItem = ({ split, attempts, converted, rate }: SplitItemProps) => {

    return (
      <SplitItemContainer>
        <View style={{width: '35%'}}>
          <SplitFrame split={split} />
        </View>
        <SplitStatsContainer >
          <SplitTitleContainer>
            <SplitTitle>{split}</SplitTitle>
          </SplitTitleContainer>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Text>Attempted: <Text style={{fontWeight: 'bold'}}>{attempts}</Text> </Text>
            <Text>Converted: <Text style={{fontWeight: 'bold'}}>{converted}</Text> </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Text>Conversion Rate: <Text style={{fontWeight: 'bold'}}>{rate}%</Text> </Text>
              <MaterialIcons name="info-outline" size={20} color="#0d9488" />
            </View>

          </View>
        </SplitStatsContainer>
      </SplitItemContainer>
    )
  }

  return (
    <Container>
      {isLoading ? ( <OverlayLoading /> ) : (
        <>
          <Header />
          <Content>
            <Title>Dashboard</Title>
            <StatsContainer>
              <ArsenalStatsCard>
                <View
                  style={{width: '100%', alignItems: 'center', backgroundColor: '#0d9488', height: 28, justifyContent: 'center'}}
                >
                <ArsenalStatsCardTitle>Arsenal</ArsenalStatsCardTitle>
                </View>
                {arsenal.length === 0 ? (
                  <EmptyBalls />
                ): (
                  <Swiper
                  showsPagination={true}
                  loop={false}
                  paginationStyle={{
                    bottom: -2,
                  }}
                  activeDotColor="#0d9488"
                >
                  {arsenal.length > 0 && arsenal.map((ball: any, index: number) => (
                    <BallItem
                      key={ball.ball.id}
                      ball={ball.ball}
                      totalScore={ball.total_score}
                      totalGames={ball.total_games}
                      index={index}
                    />
                  ))}
                </Swiper>
                )}



              </ArsenalStatsCard>
              <AllTimeScoreCard>
                <View
                  style={{width: '100%', alignItems: 'center', backgroundColor: '#FFF', height: 28, justifyContent: 'center', borderTopLeftRadius: 6, borderTopRightRadius: 6}}
                >
                  <Text style={{color: '#0d9488', fontWeight: 'bold'}}>Highest Score</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 48}}>{highScoreAllTime}</Text>
                  <Text style={{textAlign: 'center', color: 'white'}}>All Time</Text>
                </View>
              </AllTimeScoreCard>
            </StatsContainer>

            <SplitsContainer>
            <Title style={{marginBottom: 16}}>Splits</Title>
            {splits_converted.length == 0 && <EmptySplits />}
            <Swiper
              showsPagination={true}
              loop
              paginationStyle={{
                bottom: -8,
              }}
              activeDotColor="#0d9488"
              autoplay
              autoplayTimeout={3}
            >

              {splits_converted.length > 0 && splits_converted.map((split: any, index: any) => (
                <SplitItem
                  split={split.split}
                  attempts={split.attempted}
                  converted={split.converted}
                  rate={split.rate}
                  key={index}
                />
              ))}

            </Swiper>
            </SplitsContainer>

          </Content>
        </>

      )}
    </Container>
  );
}
