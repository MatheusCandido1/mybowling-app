import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, SearchContainer, SearchButton, SearchInput, GamesContainer, SearchButtonText} from "./styles";
import { Input } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { IGame } from "../../entities/Game";
import { GameCard } from "../../components/Games/GameCard";

export function Games() {
  const [search, setSearch] = useState('')
  const [games, setGames] = useState<any>([
    {
      id: '1',
      date: Date(),
      frames: [],
      totalScore: 300,
      status:'COMPLETED',
      ball: 'Spin Pro',
      location: 'South Point Bowling Center'
    },
    {
      id: '2',
      date: Date(),
      frames: [],
      totalScore: 300,
      status:'COMPLETED',
      ball: 'Spin Pro',
      location: 'South Point Bowling Center'
    },
    {
      id: '3',
      date: Date(),
      frames: [],
      totalScore: 300,
      status:'COMPLETED',
      ball: 'Spin Pro',
      location: 'South Point Bowling Center'
    },
    {
      id: '4',
      date: Date(),
      frames: [],
      totalScore: 300,
      status:'COMPLETED',
      ball: 'Spin Pro',
      location: 'South Point Bowling Center'
    },
    {
      id: '5',
      date: Date(),
      frames: [],
      totalScore: 300,
      status:'COMPLETED',
      ball: 'Spin Pro',
      location: 'South Point Bowling Center'
    }
  ]);


  return (
    <Container>
      <Header title="Games" />
      <Content>
        <SearchContainer>
          <SearchInput>
            <Input
              variant="underlined"
              placeholder="Search..."
              style={{
                width: "80%",
                fontSize: 14,
              }}
              focusOutlineColor={"#0d9488"}
            />
            </SearchInput>
          <SearchButton>
            <MaterialCommunityIcons name="magnify" size={24} color="#FFF" />
            <SearchButtonText>Filter </SearchButtonText>
          </SearchButton>
        </SearchContainer>
        <GamesContainer>
          <FlatList
            data={games}
            keyExtractor={(item: IGame) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            renderItem={({ item }) => (
             <GameCard />
            )}
          >

          </FlatList>
        </GamesContainer>
      </Content>
    </Container>
  )
}
