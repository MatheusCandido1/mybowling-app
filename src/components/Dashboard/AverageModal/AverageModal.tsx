import { Modal, TouchableOpacity, View, Text } from "react-native";
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
  HeaderContainer,
  GroupButtonContainer,
  TypeButton,
  TypeButtonText,
  WeeklyContainer,
  YearlyContainer,
  WeeklyHeader,
  WeekContainer,
  YearlyContent,
} from "./styles";
import {  LineChart } from "react-native-gifted-charts";
import { getMonthName } from "../../../utils/formatDate";

import { useAverageModalController } from "./useAverageModalController";
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
    isLoading,
    type,
    handleTypeChange,
    week,
    handleWeekChange,
    begginingOfWeek,
    endOfWeek,
    weekAverage,
    weekTotalGames,
    isLoadingWeekly,
    weeklyValues,
    currentYear,
    handleCurrentYearChange,
    isLoadingYearly,
    yearlyValues,
    yearAverage,
    yearTotalGames
  } = useAverageModalController();

  const ModalHeader = () => {
    return (
      <HeaderContainer>
        <GroupButtonContainer>
          <TypeButton
            style={{
              backgroundColor: type === 'weekly' ? '#0d9488' : '#FFF'
            }}
            onPress={() => handleTypeChange('weekly')}
          >
            <MaterialCommunityIcons name="calendar-week" size={18} color={ type == 'weekly' ? "#FFF" : "#0d9488"} />
            <TypeButtonText
              style={{
                color: type === 'weekly' ? '#FFF' : '#0d9488'
              }}
            >
              Weekly
            </TypeButtonText>
          </TypeButton>
          <TypeButton
            style={{
              backgroundColor: type === 'monthly' ? '#0d9488' : '#FFF'
            }}
            onPress={() => handleTypeChange('monthly')}
          >
            <MaterialCommunityIcons name="calendar-month" size={18} color={ type == 'monthly' ? "#FFF" : "#0d9488"} />
            <TypeButtonText
              style={{
                color: type === 'monthly' ? '#FFF' : '#0d9488'
              }}
            >
              Monthly
            </TypeButtonText>
          </TypeButton>
          <TypeButton
            style={{
              backgroundColor: type === 'yearly' ? '#0d9488' : '#FFF'
            }}
            onPress={() => handleTypeChange('yearly')}
          >
            <MaterialCommunityIcons name="calendar-today" size={18} color={ type == 'yearly' ? "#FFF" : "#0d9488"} />
            <TypeButtonText
              style={{
                color: type === 'yearly' ? "#FFF" : "#0d9488"
              }}
            >
              Yearly
            </TypeButtonText>
          </TypeButton>
        </GroupButtonContainer>
      </HeaderContainer>
    )
  }

  const WeeklyComponent = () => {
    return (
      <WeeklyContainer>
        <WeeklyHeader>
          <WeekContainer>
            <TouchableOpacity
              onPress={() => handleWeekChange("decrement")}
            >
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <MonthText>Week {week.week.toString()} - {begginingOfWeek} to {endOfWeek}</MonthText>

            <TouchableOpacity
              onPress={() => handleWeekChange("increment")}
            >
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          </WeekContainer>
        </WeeklyHeader>
        <>
          <StatsContainer>
            <AverageContainer>
              <StatsText>Average:</StatsText>
              <StatsBadge>
                <StatsBadgeText>{isLoadingWeekly ? '...' : weekAverage}</StatsBadgeText>
              </StatsBadge>
            </AverageContainer>
            <GamesContainer>
              <StatsText>Games Played:</StatsText>
              <StatsBadge>
                <StatsBadgeText>{isLoadingWeekly ? '...' : weekTotalGames}</StatsBadgeText>
              </StatsBadge>
            </GamesContainer>

          </StatsContainer>
          </>

          {(weekTotalGames === 0 && !isLoadingWeekly) ? (
            <View style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
              <StatsText style={{color: '#000'}}>No games played this week.</StatsText>
            </View>
          ) :
            (isLoadingWeekly) ? (
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
                  data={weeklyValues}
                  color1="#0d9488"
                  color2="#0d9488"
                  color3="#0d9488"
                  startFillColor1="#0d9488"
                  yAxisColor={"#0d9488"}
                  xAxisColor={"#0d9488"}
                  yAxisIndicesColor={"#0d9488"}
                  spacing={52}
                  noOfSections={6}
                  textColor1="#000"
                  initialSpacing={6}
                  textFontSize1={14}
                  isAnimated
                  thickness={3}
                  yAxisTextStyle={{color: '#0d9488', fontSize: 14, fontWeight: 'bold'}}
                />
              </MonthlyContent>
            )}
      </WeeklyContainer>
    );
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
          {(total_games === 0 && !isLoading) ? (
            <View style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
              <StatsText style={{color: '#000'}}>No games played this month.</StatsText>
            </View>
          ) :
            (isLoading) ? (
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
                  spacing={52}
                  noOfSections={6}
                  textColor1="#000"
                  initialSpacing={6}
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



  const YearlyComponent = () => {
    return (
      <MonthlyContainer>

      <MonthlyHeader>
          <YearContainer>
          <TouchableOpacity
            onPress={() => handleCurrentYearChange("decrement")}
          >
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <YearText>{currentYear.year}</YearText>

            <TouchableOpacity
              onPress={() => handleCurrentYearChange("increment")}
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
              <StatsBadgeText>{isLoadingYearly ? '...' : yearAverage}</StatsBadgeText>
            </StatsBadge>
          </AverageContainer>
          <GamesContainer>
            <StatsText>Games Played:</StatsText>
            <StatsBadge>
              <StatsBadgeText>{isLoadingYearly ? '...' : yearTotalGames}</StatsBadgeText>
            </StatsBadge>
          </GamesContainer>

        </StatsContainer>
        </>
        {(yearTotalGames === 0 && !isLoadingYearly) ? (
          <View style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}>
            <StatsText style={{color: '#000'}}>No games played this year.</StatsText>
          </View>
        ) :
          (isLoadingYearly) ? (
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
                data={yearlyValues}
                color1="#0d9488"
                color2="#0d9488"
                color3="#0d9488"
                startFillColor1="#0d9488"
                yAxisColor={"#0d9488"}
                xAxisColor={"#0d9488"}
                yAxisIndicesColor={"#0d9488"}
                spacing={52}
                noOfSections={6}
                textColor1="#000"
                initialSpacing={6}
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
        <ModalHeader />
        <Content>
          {type === 'weekly' ? <WeeklyComponent /> : null}
          {type === 'monthly' ? <MonthlyComponent /> : null}
          {type === 'yearly' ? <YearlyComponent /> : null}

        </Content>
      </Container>
    </Overlay>
    </Modal>
  )
}
