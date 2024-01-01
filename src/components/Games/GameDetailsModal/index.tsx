import { Modal, TouchableOpacity,Text, FlatList, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Container, Header, Overlay, Content, InformationContainer, Title, Subtitle, ScoresContainer, StatsContainer, StatsSubContainer,FramesContainer, Footer} from "./styles";
import { FilterItem, FilterText } from "../../../Screens/Games/styles";
import { Ball2Icon } from "../../Icons/Ball2Icon";
import { IGame } from "../../../entities/Game";
import { formatBallName } from "../../../utils/formatBallName";
import { formatDate } from "../../../utils/formatDate";
import { CircularProgress } from "../../Shared/Game/CircularProgress";
import { getStrikes, getSpares, getOpens, getSplits, getSinglePinSapres, getMultiPinSpares, getTenPinSpares, getSevenPinSpares } from "../../../utils/getStats";
import { Scores } from "../../Game/CurrentGame/Scores";
import { FrameCard } from "../../Shared/Game/FrameCard";

interface GameDetailsModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  selectedGame: IGame;
}

export function GameDetailsModal({ showModal, setShowModal, selectedGame }: GameDetailsModalProps ) {
  const { game_date, ball, location, frames } = selectedGame;


  const strikes = Math.round((getStrikes(frames) / 12) * 100);
  const spares = Math.round((getSpares(frames) / 12) * 100);
  const opens = Math.round((getOpens(frames) / 12) * 100);
  const splits = Math.round((getSplits(frames) / 12) * 100);
  const singlePinSpares = Math.round((getSinglePinSapres(frames) / 12) * 100);
  const multiPinSpares = Math.round((getMultiPinSpares(frames) / 12) * 100);
  const tenPinSpares = Math.round((getTenPinSpares(frames) / 12) * 100);
  const sevenPinSpares = Math.round((getSevenPinSpares(frames) / 12) * 100);


  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent
      >
        <Overlay>
          <Container>
            <Header>
              <Title>Game Details</Title>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
              >
                <MaterialCommunityIcons name="close" size={32} color="#000" />
              </TouchableOpacity>
            </Header>
            <FlatList
              data={[]}
              keyExtractor={() => "key"}
              renderItem={null}
              ListHeaderComponent={() => (
                <Content>
                <InformationContainer>
                <FilterItem>
                  <MaterialCommunityIcons name="calendar" size={24} color="#0d9488" />
                  <FilterText>
                    <FilterText style={{fontWeight: 'bold' }}>Date: </FilterText>
                    {formatDate(game_date.toString())}
                  </FilterText>
                </FilterItem>

                <FilterItem>
                  <Ball2Icon  height={24} width={24} color={ball.color} />
                  <FilterText>
                    <FilterText style={{fontWeight: 'bold'}}>Ball: </FilterText>
                    {formatBallName(ball)}
                  </FilterText>
                </FilterItem>

                <FilterItem>
                  <Entypo name="location" size={24} color="#0d9488" />
                  <FilterText>
                  <FilterText style={{fontWeight: 'bold'}}>Location: </FilterText>
                  {location.name}
                  </FilterText>
                </FilterItem>
                </InformationContainer>
                <ScoresContainer>
                  <Subtitle style={{marginBottom: 8}}>Scoreboard</Subtitle>
                  <Scores
                    frames={frames}
                  />

                </ScoresContainer>

                <StatsContainer>
                  <Subtitle>Stats</Subtitle>
                  <StatsSubContainer>
                    <CircularProgress
                      percentage={strikes}
                      label="Strikes"
                    />
                    <CircularProgress
                      percentage={spares}
                      label="Spares"
                    />
                    <CircularProgress
                      percentage={opens}
                      label="Opens"
                    />
                    <CircularProgress
                      percentage={splits}
                      label="Splits"
                    />
                  </StatsSubContainer>

                  <StatsSubContainer>
                    <CircularProgress
                      percentage={singlePinSpares}
                      label="Single Pin Spares"
                    />
                    <CircularProgress
                      percentage={multiPinSpares}
                      label="Multi Pin Spares"
                    />
                    <CircularProgress
                      percentage={tenPinSpares}
                      label="10 Pin Spares"
                    />
                    <CircularProgress
                      percentage={sevenPinSpares}
                      label="7 Pin Spares"
                    />
                  </StatsSubContainer>


                </StatsContainer>
                <FramesContainer>
                  <Subtitle
                    style={{
                      marginBottom: 8,
                    }}
                  >Frame by Frame</Subtitle>
                  <FlatList
                    data={frames}
                    keyExtractor={(item) => item.frame_number?.toString()}
                    ItemSeparatorComponent={() => <View style={{height: 16}} />}
                    renderItem={({ item }) => (
                      <FrameCard
                        frame={item}
                      />
                    )}
                  />
                  <Footer />

                </FramesContainer>

              </Content>
              )}
            />
          </Container>
        </Overlay>
      </Modal>
  )
}
