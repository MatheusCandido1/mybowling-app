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
  GroupContainerTitle,
  NotificationContainer,
  NotificationCounterContainer,
  NotificationCounterText,
  ScoreItemContainer,
  GamesPlayedLabel,
  RecentGamesContainer,
  RecentGameCard,
  RecentGameCardTitle,
  RecentGameCardDate,
  RecentGameCardSubtitle
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
import { EmptySplits } from "../../components/Dashboard/EmptySplits";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
import { isAndroid } from "../../utils/getOS";
import { AverageModal } from "../../components/Dashboard/AverageModal/AverageModal";
import { EmptyRecentGames } from "../../components/Dashboard/EmptyRecentGames";


export function Dashboard() {
  const { height, width } = Dimensions.get('window');

  const navigation = useNavigation();

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const { stats, isLoading, handleShowAverageModal } = useDashboardController();
  const { loggedUser } = useAuth();

  const user = {
    first_name: loggedUser?.name.split(' ')[0],
  }

  const arsenal = stats.most_used_balls || [];
  const totalGamesAllTime = stats.total_games;

  const splits_converted = stats.splits_converted || [];

  const recent_games = stats.most_recent_games || [];


  const scores = [
    {headerTitle: 'Highest Score', score: stats.highest_score || 0, footer: 'All Time'},
    {headerTitle: 'Highest Score', score: stats.highest_score_this_month || 0, footer: 'This Month'},
  ]

  function navigateToGroups() {
    navigation.navigate('InternalStack', {screen: 'groups'});
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
            <NotificationContainer
              onPress={() => navigation.navigate('InternalStack', {screen: 'notifications'})}
            >
              <NotificationCounterContainer>
                <NotificationCounterText>{loggedUser?.notifications_not_read}</NotificationCounterText>
              </NotificationCounterContainer>
              <MaterialIcons name="notifications-none" size={30} color="white" />
            </NotificationContainer>

          </IconContainer>
        </HeaderContainer>
        <Average />
      </Navbar>
    )
  }

  const Average = () => {
    return (
      <AverageContainer>
        <AverageCard
          onPress={handleShowAverageModal}
        >
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
            <GamesPlayedLabel>Games played: {stats.current_month_games}</GamesPlayedLabel>
          </View>
        </AverageCard>
        <AverageCard disabled>
          <AverageCardTitle>All Time Average</AverageCardTitle>
          <AverageText>{stats.all_time_average}</AverageText>
          <GamesPlayedLabel>Games played: {stats.total_games}</GamesPlayedLabel>
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

  interface ScoreItemProps {
    headerTitle: string;
    score: string;
    footer: string;
  }

  const ScoreItem = ({ headerTitle, score, footer}: ScoreItemProps) => {
    return (
      <ScoreItemContainer>
        <View style={{width: '100%', alignItems: 'center', backgroundColor: '#FFF', height: 28, justifyContent: 'center', borderTopLeftRadius: 6, borderTopRightRadius: 6}}>
          <Text style={{color: '#0d9488', fontWeight: 'bold'}}>
            {headerTitle}
          </Text>
        </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -12,
          }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 48}}>
              {score}
            </Text>
            <Text style={{textAlign: 'center', color: 'white'}}>{footer}</Text>
           </View>

      </ScoreItemContainer>
    )
  }

  const RecentGame = ({ data }: {data: Object}) => {

    const formattedDate = new Date(data.game_date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });

    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 6,
          flex: 3
        }}
      >
      <RecentGameCard>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2, backgroundColor: '#0d9488', width: '100%', height: 24}}>
          <MaterialIcons name="calendar-today" size={16} color="white" />
          <RecentGameCardDate>{formattedDate}</RecentGameCardDate>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <RecentGameCardSubtitle>Score</RecentGameCardSubtitle>
          <RecentGameCardTitle>{data.total_score}</RecentGameCardTitle>
          </View>
        </View>
      </RecentGameCard>
    </View>
    )
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
          <Content
            showsVerticalScrollIndicator={false}
            scrollEnabled={
              true
            }
          >
            <Title>Dashboard</Title>
            <StatsContainer>
              <ArsenalStatsCard>
                <View
                  style={{width: '100%', alignItems: 'center', backgroundColor: '#0d9488', height: 28, justifyContent: 'center',}}
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
                <Swiper
                  showsPagination={true}
                  loop
                  paginationStyle={{
                    bottom: 6,
                  }}
                  activeDotColor="#FFF"
                  autoplay
                  autoplayTimeout={3}
                >
                {stats && scores.length > 0 && scores.map((score: any, index: number) => (
                  <ScoreItem
                    key={index}
                    headerTitle={score.headerTitle}
                    score={score.score}
                    footer={score.footer}
                  />
                  ))}
                </Swiper>
              </AllTimeScoreCard>
            </StatsContainer>

            <RecentGamesContainer>
              <Title style={{marginVertical: 16}}>Recent Games</Title>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 8,
                  flex: 3
                }}
              >
                {recent_games && recent_games.length > 0 ? recent_games.map((game: any, index: number) => (
                  <RecentGame
                    key={index}
                    data={game}
                  />
                )) : (
                  <EmptyRecentGames />
                )}
              </View>
            </RecentGamesContainer>

            <SplitsContainer>
            <Title style={{marginBottom: 16}}>Splits</Title>
            {splits_converted.length == 0 && <EmptySplits />}
            <Swiper
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
                  split={split.pins}
                  attempts={split.attempted}
                  converted={split.converted}
                  rate={split.rate}
                  key={index}
                />
              ))}

            </Swiper>
            </SplitsContainer>
            <View style={{height: 60}}></View>
          </Content>
        </>

      )}
      <AverageModal />
    </Container>
  );
}
