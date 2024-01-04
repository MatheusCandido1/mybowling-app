import { FlatList, View } from "react-native";
import { useGamesByGroupController } from "./useGamesByGroupController";
import { Container, FilterContainer, FilterItem, FilterText, SearchContainer } from "./styles";
import { GameCard } from "../../Games/GameCard";
import { GameDetailsModal } from "../../Games/GameDetailsModal";
import { OverlayLoading } from "../../Shared/OverlayLoading";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { formatFromDate } from "../../../utils/formatDate";
import { GamesByGroupFilterModal } from "../GamesByGroupFilterModal";
import { EmptyGames } from "../EmptyGames";

export function Games() {
  const {
    isFetching,
    games,
    showDetailsModal,
    showFilterModal,
    handleCloseDetailsModal,
    handleShowDetailsModal,
    handleShowFilterModal,
    handleCloseFilterModal,
    selectedGame,
    filters,
    handleShowFilterGamesModal
  } = useGamesByGroupController();

  return (
    <>
    {isFetching ? (
      <OverlayLoading style="light" />
    ): (
    <Container>
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
                <FilterText style={{fontWeight: 'bold' }}>End Date: </FilterText>
                {formatFromDate(filters.end_date)}
              </FilterText>
            </FilterItem>

            {filters.location && (
            <FilterItem>
              <Entypo name="location" size={24} color="#0d9488" />
              <FilterText>
                <FilterText style={{fontWeight: 'bold' }}>Location: </FilterText>
                {filters.location.name}
              </FilterText>
            </FilterItem>
            )}

            {filters.user && (
            <FilterItem>
              <MaterialCommunityIcons name="account" size={24} color="#0d9488" />
              <FilterText>
                <FilterText style={{fontWeight: 'bold' }}>Player: </FilterText>
                {filters.user.name}
              </FilterText>
            </FilterItem>
            )}

            </FilterContainer>
          </SearchContainer>
          {games.length === 0 ? (
            <EmptyGames />
          ) : (
            <FlatList
              data={games}
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              onEndReachedThreshold={0.4}
              renderItem={({ item }) => (
                <GameCard
                  location={item.location}
                  date={item.game_date}
                  totalScore={item.total_score}
                  frames={item.frames}
                  user={item.user}
                  onShowDetails={() => handleShowDetailsModal(item)}
                />
                )}
              >
              </FlatList>

          )}

    {showDetailsModal ? (
      <GameDetailsModal
        showModal={showDetailsModal}
        setShowModal={handleCloseDetailsModal}
        selectedGame={selectedGame}
      />
    ) : null}

    <GamesByGroupFilterModal />
    </Container>
    )}
    </>
  )
}
