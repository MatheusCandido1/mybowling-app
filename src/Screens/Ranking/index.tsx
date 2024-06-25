import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Shared/Header";
import { Container, Content, Option, OptionText, OptionsContainer, PodiumContainer, RankedUsers } from "./styles";
import { useRankingController } from "./useRankingController";
import { Place } from "../../components/Ranking/Place";
import { RankedUser } from "../../components/Ranking/RankedUser";
import { FlatList, View, Text } from "react-native";
import { BowlingLoader } from "../../components/Shared/BowlingLoader";
import { RankedGameDetailsModal } from "../../components/Ranking/RankedGameDetailsModal";

export function Ranking() {

  const navigation = useNavigation();

  const {
    getOptionStyle,
    rankings,
    isLoading,
    showGameDetails,
    handleShowGameDetails,
    handleRankingPeriod,
    period
  } = useRankingController();

  const options = ['Week', 'Month'];

  const optionComponents = () => {
    return options.map((option) => {
      return (
        <Option
          key={option}
          onPress={() => handleRankingPeriod(option)}
          style={{
            backgroundColor: getOptionStyle(option).backgroundColor,
          }}
        >
          <OptionText
            style={{
              color: getOptionStyle(option).textColor,
            }}
          >{option}</OptionText>
        </Option>
      )
    })
  }

  return (
    <Container>
        <Header title="Ranking" onPress={() => navigation.goBack()} />
        <Content>
          <OptionsContainer>
            {optionComponents()}
          </OptionsContainer>
          {isLoading ? (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <BowlingLoader />
            </View>
          ): (
            <>
             {rankings.length >= 3 ? (
              <PodiumContainer>
              <Place
                name={rankings[1].name}
                position={2}
                avatar={rankings[1].avatar}
                score={rankings[1].total_score}
                onPress={() => handleShowGameDetails(rankings[1])}

              />
              <Place
                name={rankings[0].name}
                position={1}
                avatar={rankings[0].avatar}
                score={rankings[0].total_score}
                onPress={() => handleShowGameDetails(rankings[0])}
              />
              <Place
                name={rankings[2].name}
                position={3}
                avatar={rankings[2].avatar}
                score={rankings[2].total_score}
                onPress={() => handleShowGameDetails(rankings[2])}
              />
              </PodiumContainer>
              ): (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>{period}ly ranking not available.</Text>
                </View>
              )}
              <RankedUsers>
                <FlatList
                  data={rankings.slice(3, rankings.length)}
                  ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={({ item }) => (
                    <RankedUser
                      rank={item.rank}
                      avatar={item.avatar}
                      name={item.name}
                      score={item.total_score}
                      onPress={() => handleShowGameDetails(item)}
                    />
                  )}
                />
              </RankedUsers>
            </>
          )}
        </Content>
        {showGameDetails ? <RankedGameDetailsModal /> : null}

    </Container>
  )
}
