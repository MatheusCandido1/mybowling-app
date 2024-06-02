import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Shared/Header";
import { Container, Content, Option, OptionText, OptionsContainer, PodiumContainer, RankedUsers } from "./styles";
import { useRankingController } from "./useRankingController";
import { Place } from "../../components/Ranking/Place";
import { RankingSwitch } from "../../components/Ranking/RankingSwitch";
import { RankedUser } from "../../components/Ranking/RankedUser";
import { FlatList, View } from "react-native";

export function Ranking() {

  const navigation = useNavigation();

  const {
    handleSetRakingPeriod,
    getOptionStyle,
    rankings,
    isFetching
  } = useRankingController();

  const options = ['Week', 'Month'];

  const optionComponents = () => {
    return options.map((option) => {
      return (
        <Option
          key={option}
          onPress={() => handleSetRakingPeriod(option)}
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
          {!isFetching && (
            <>
              <PodiumContainer>
                <Place
                  position={2}
                  avatar={rankings[1].avatar}
                  score={rankings[1].total_score}
                />
                <Place
                  position={1}
                  avatar={rankings[0].avatar}
                  score={rankings[0].total_score}
                />
                <Place
                  position={3}
                  avatar={rankings[2].avatar}
                  score={rankings[2].total_score}
                />
              </PodiumContainer>
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
                    />
                  )}
                />
              </RankedUsers>
            </>
          )}
        </Content>
        <RankingSwitch />

    </Container>
  )
}
