import { FlatList, View } from "react-native";
import { useGamesByGroupController } from "./useGamesByGroupController";
import { Container } from "./styles";
import { GameCard } from "../../Games/GameCard";
import { GameDetailsModal } from "../../Games/GameDetailsModal";
import { GamesFilterModal } from "../../Games/GamesFilterModal";

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
    handleSetPage
  } = useGamesByGroupController();

  return (
    <Container>
      <FlatList
        data={games}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        onEndReached={handleSetPage}
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

    {showDetailsModal ? (
      <GameDetailsModal
        showModal={showDetailsModal}
        setShowModal={handleCloseDetailsModal}
        selectedGame={selectedGame}
      />
    ) : null}

    {showFilterModal ? (
      <GamesFilterModal
        showModal={showFilterModal}
        setShowModal={handleCloseFilterModal}
      />
    ) : null}
    </Container>
  )
}
