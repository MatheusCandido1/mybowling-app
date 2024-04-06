import { Header } from "../../components/Shared/Header";
import { Container, Content, SearchContainer, SearchButton, GamesContainer, FilterText, FilterItem, FilterContainer, SearchButtonText, NoNextPageContainer, NoNextPageText} from "./styles";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import { GameCard } from "../../components/Games/GameCard";
import { useGamesController } from "./useGamesController";
import { GameDetailsModal } from "../../components/Games/GameDetailsModal";
import { GamesFilterModal } from "../../components/Games/GamesFilterModal";
import { formatFromDate } from "../../utils/formatDate";
import { Ball2Icon } from "../../components/Icons/Ball2Icon";
import { useNavigation } from "@react-navigation/native";
import { EmptyGames } from "../../components/Games/EmptyGames";
import { formatBallName } from "../../utils/formatBallName";
import { RefreshControl, FlatList } from "react-native-gesture-handler";
import { EditGameModal } from "../../components/Games/EditGameModal";
import { BowlingLoader } from "../../components/Shared/BowlingLoader";

export function Games() {
  const navigation = useNavigation();

  const {
    isLoading,
    games,
    showDetailsModal,
    showFiltersModal,
    handleCloseDetailsModal,
    handleShowDetailsModal,
    handleShowFiltersModal,
    filters,
    selectedGame,
    refetchGames,
    onReachEnd,
    hasNextPage,
    isFetchingNextPage
  } = useGamesController();

  function fetchingNextPage() {
    if(isFetchingNextPage) {
      return (
        <View style={{marginTop: 12}}>
          <ActivityIndicator />
        </View>
      )
    }
    return null;
  }

  //Outside of the component
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 0; //Distance from the bottom you want it to trigger.
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
  };

  return (
    <Container>
        <>
        <Header title="Games" onPress={() => navigation.goBack()} />
        <Content>
        <SearchContainer>
              <FilterContainer>
                <FilterText
                  style={{ fontWeight: 'bold' }}
                >Filters:
              </FilterText>

              <FilterItem>
                <MaterialCommunityIcons name="calendar-arrow-right" size={24} color="#0d9488" />
                <FilterText>
                  <FilterText style={{fontWeight: 'bold' }}>Start Date: </FilterText>
                  {formatFromDate(filters.start_date)}
                </FilterText>
              </FilterItem>

              <FilterItem>
                <MaterialCommunityIcons name="calendar-arrow-left" size={24} color="#0d9488" />
                <FilterText>

                  <FilterText style={{fontWeight: 'bold'}}>End Date: </FilterText>
                  {formatFromDate(filters.end_date)}
                </FilterText>
              </FilterItem>
              { filters.ball !== null ? (
                <FilterItem>
                <Ball2Icon  height={24} width={24} color={filters.ball.color} />
                <FilterText>
                  <FilterText style={{fontWeight: 'bold'}}>Ball: </FilterText>
                  {formatBallName(filters.ball)}
                </FilterText>
                </FilterItem>
                ): null
              }
              { filters.location !== null ? (
                <FilterItem>
                  <Entypo name="location" size={24} color="#0d9488" />
                  <FilterText>
                  <FilterText style={{fontWeight: 'bold'}}>Location: </FilterText>
                  {filters.location.name}
                  </FilterText>
                </FilterItem>
              ): null}


              </FilterContainer>
            </SearchContainer>
            {isLoading ? (
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
            {games.length === 0 && !isLoading && <EmptyGames />}

            {!isLoading && games.length > 0 && (
               <GamesContainer>
               <FlatList
                 data={games}
                 onScroll={({nativeEvent}) => {
                   if (isCloseToBottom(nativeEvent)) {
                     if(!isFetchingNextPage && hasNextPage) {
                       onReachEnd();
                     }
                   }
                 }}
                 scrollEventThrottle={1000}
                 keyExtractor={(item: any) => item.id}
                 showsVerticalScrollIndicator={false}
                 ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                 onEndReachedThreshold={0}
                 ListFooterComponent={() => fetchingNextPage() }
                 refreshControl={
                   <RefreshControl
                     refreshing={isLoading}
                     onRefresh={refetchGames}
                   />
                 }
                 renderItem={({ item }) => (
                 <GameCard
                   id={item.id}
                   location={item.location}
                   date={item.game_date}
                   totalScore={item.total_score}
                   frames={item.frames}
                   onShowDetails={() => handleShowDetailsModal(item)}

                 />
                 )}
               >
               </FlatList>
             </GamesContainer>
            )}
        </Content>
        </>

      {showDetailsModal ? (
        <GameDetailsModal
          showModal={showDetailsModal}
          setShowModal={handleCloseDetailsModal}
          selectedGame={selectedGame}
        />
      ) : null}

      {showFiltersModal ? (
        <GamesFilterModal
          showModal={showFiltersModal}
        />
      ) : null}

      <EditGameModal />


        <SearchButton
          onPress={handleShowFiltersModal}
        >
          <SearchButtonText>Filters</SearchButtonText>

          <Ionicons name="options" size={24} color="#0d9488" />
        </SearchButton>
      </Container>
  )
}
