import { Header } from "../../components/Shared/Header";
import { Container, Content, SearchContainer, SearchButton, GamesContainer, FilterText, FilterItem, FilterContainer, SearchButtonText} from "./styles";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { GameCard } from "../../components/Games/GameCard";
import { useGamesController } from "./useGamesController";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { GameDetailsModal } from "../../components/Games/GameDetailsModal";
import { GamesFilterModal } from "../../components/Games/GamesFilterModal";
import { formatFromDate } from "../../utils/formatDate";
import { Ball2Icon } from "../../components/Icons/Ball2Icon";
import { useNavigation } from "@react-navigation/native";
import { EmptyGames } from "../../components/Games/EmptyGames";
import { formatBallName } from "../../utils/formatBallName";
import { RefreshControl } from "react-native-gesture-handler";

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
    handleCloseFiltersModal,
    filters,
    selectedGame,
    refetchGames
  } = useGamesController();

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
            <OverlayLoading style="light" />
          ) : (
            <>
            {games.length === 0 && <EmptyGames />}
            <GamesContainer>
              <FlatList
                data={games}
                keyExtractor={(item: any) => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                refreshControl={
                  <RefreshControl
                    refreshing={isLoading}
                    onRefresh={refetchGames}
                  />
                }
                renderItem={({ item }) => (
                <GameCard
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
            </>
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


        <SearchButton
          onPress={handleShowFiltersModal}
        >
          <SearchButtonText>Filters</SearchButtonText>

          <Ionicons name="options" size={24} color="#0d9488" />
        </SearchButton>
      </Container>
  )
}
