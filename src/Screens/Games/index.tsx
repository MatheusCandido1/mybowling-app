import { Header } from "../../components/Shared/Header";
import { Container, Content, SearchContainer, SearchButton, GamesContainer, FilterText, FilterItem, FilterContainer} from "./styles";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { GameCard } from "../../components/Games/GameCard";
import { useGamesController } from "./useGamesController";
import { OverlayLoading } from "../../components/Shared/OverlayLoading";
import { GameDetailsModal } from "../../components/Games/GameDetailsModal";
import { GamesFilterModal } from "../../components/Games/GamesFilterModal";
import { formatFromDate } from "../../utils/formatDate";
import { Ball2Icon } from "../../components/Icons/Ball2Icon";

export function Games() {

  const {
    isLoading,
    games,
    showDetailsModal,
    showFilterModal,
    handleCloseDetailsModal,
    handleShowDetailsModal,
    handleShowFilterModal,
    handleCloseFilterModal,
    filters,
    selectedGame
  } = useGamesController();

  return (
    <Container>
      {isLoading && <OverlayLoading />}
      {!isLoading && (
        <>
        <Header title="Games" />
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
                Motiv Ripcord - 14lb
              </FilterText>
              </FilterItem>
              ): null
            }
            { filters.location !== null ? (
              <FilterItem>
                <Entypo name="location" size={24} color="#0d9488" />
                <FilterText>
                <FilterText style={{fontWeight: 'bold'}}>Location: </FilterText>
                South Point Bowling Center
                </FilterText>
              </FilterItem>
            ): null}


            </FilterContainer>
            <SearchButton
              onPress={() => handleShowFilterModal()}
            >
              <Ionicons name="options" size={24} color="#FFF" />
            </SearchButton>
          </SearchContainer>
          <GamesContainer>
            <FlatList
              data={games}
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
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
        </Content>
        </>
      )}
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
