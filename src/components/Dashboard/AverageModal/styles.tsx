import styled from "styled-components/native";

import { AverageHistoryModalHeight } from '../../../utils/modalHeightByDevice';


export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${AverageHistoryModalHeight()!.px};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 28px;
`;

export const MonthlyContainer = styled.View`
  flex: 1;
`;

export const MonthlyHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const MonthContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MonthText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  padding: 8px 16px;
`;

export const YearContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const YearText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  padding: 8px 16px;
`;

export const MonthlyContent = styled.View``;

export const StatsContainer = styled.View`
  background-color: #f5f5f5;
  height: 60px;
  width: 100%;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 16px;
  gap: 12px;
`;

export const AverageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4px;
`;

export const StatsText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
`;

export const StatsBadge = styled.View`
  width: 38px;
  height: 38px;
  border: 2px solid #0d9488;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const StatsBadgeText = styled.Text`
  font-size: 14px;
  color: #0d9488;
  font-weight: bold;
`;


export const GamesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4px;
`;

export const LocalLoading = styled.View`
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const HeaderContainer = styled.View`
  padding: 0 24px;
  margin-bottom: 16px;
`;

export const GroupButtonContainer = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypeButton = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  border-radius: 8px;
`;

export const TypeButtonText = styled.Text`
  font-size: 14px;
  color: #0d9488;
  font-weight: bold;
  text-align: center;
`;

export const WeeklyContainer = styled.View``;

export const WeeklyHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const WeekContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const YearlyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const YearlyHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const YearlyContent = styled.View`
  width: 100%;
`;
