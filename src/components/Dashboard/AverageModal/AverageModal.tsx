import { ActivityIndicator, Dimensions, Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Overlay,
  Container,
  Header,
  Title,
  Content,
  MonthlyContainer,
  MonthlyHeader,
  YearContainer,
  MonthContainer,
  MonthText,
  YearText,
  MonthlyContent,
  StatsContainer,
  AverageContainer,
  GamesContainer,
  StatsText,
  StatsBadgeText,
  StatsBadge,
  LocalLoading,
} from "./styles";
import {  LineChart } from "react-native-gifted-charts";
import { getMonthName } from "../../../utils/formatDate";

import { useAverageModalController } from "./useAverageModalController";
import { OverlayLoading } from "../../Shared/OverlayLoading";
import { SuperOverlayLoading } from "../../Shared/SuperOverlayLoading";
import { BowlingLoader } from "../../Shared/BowlingLoader";

export function AverageModal() {
  const {
    showAverageModal,
    handleCloseAverageModal,
    monthlyValues,
    handleMonthChange,
    handleYearChange,
    params,
    average,
    total_games,
    isLoading
  } = useAverageModalController();

  const YearlyComponent = () => {
  }

  const MonthlyComponent = () => {
    return (
      <MonthlyContainer>
        <MonthlyHeader>
          <MonthContainer>
            <TouchableOpacity
              onPress={() => handleMonthChange("decrement")}
            >
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <MonthText>{getMonthName(params.month)}</MonthText>

            <TouchableOpacity
              onPress={() => handleMonthChange("increment")}
            >
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>

          </MonthContainer>
          <YearContainer>
          <TouchableOpacity
            onPress={() => handleYearChange("decrement")}
          >
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <YearText>{params.year}</YearText>

            <TouchableOpacity
              onPress={() => handleYearChange("increment")}
            >
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          </YearContainer>
        </MonthlyHeader>
        <>
          <StatsContainer>
            <AverageContainer>
              <StatsText>Average:</StatsText>
              <StatsBadge>
                <StatsBadgeText>{isLoading ? '...' : average}</StatsBadgeText>
              </StatsBadge>
            </AverageContainer>
            <GamesContainer>
              <StatsText>Games Played:</StatsText>
              <StatsBadge>
                <StatsBadgeText>{isLoading ? '...' : total_games}</StatsBadgeText>
              </StatsBadge>
            </GamesContainer>

          </StatsContainer>
          </>

        {(isLoading) ? (
          <LocalLoading>
            <BowlingLoader />
          </LocalLoading>
        ): (
          <MonthlyContent>
            <LineChart
              height={300}
              maxValue={300}
              areaChart1
              curved
              data={monthlyValues}
              color1="#0d9488"
              color2="#0d9488"
              color3="#0d9488"
              startFillColor1="#0d9488"
              yAxisColor={"#0d9488"}
              xAxisColor={"#0d9488"}
              yAxisIndicesColor={"#0d9488"}
              spacing={42}
              noOfSections={6}
              textColor1="#000"
              initialSpacing={8}
              textFontSize1={14}
              isAnimated
              thickness={3}
              yAxisTextStyle={{color: '#0d9488', fontSize: 14, fontWeight: 'bold'}}

            />
          </MonthlyContent>
        )}
      </MonthlyContainer>
    )
  }

  return (
    <Modal
      visible={showAverageModal}
      animationType="fade"
      transparent
    >
    <Overlay>
      <Container>
        <Header>
          <Title>Average History</Title>
          <TouchableOpacity onPress={handleCloseAverageModal}>
            <MaterialCommunityIcons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </Header>
        <Content>
          <MonthlyComponent />

        </Content>
      </Container>
    </Overlay>
    </Modal>
  )
}
