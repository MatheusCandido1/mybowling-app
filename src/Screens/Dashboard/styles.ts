import styled from 'styled-components/native';

import { isAndroid } from '../../utils/getOS';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;


export const Navbar = styled.View`
  padding: 24px;
  background-color: #0d9488;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  justify-content: space-between;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

export const NotificationContainer = styled.TouchableOpacity`
`;

export const NotificationCounterContainer = styled.View`
  position: absolute;
  top: -8px;
  right: -4px;
  background-color: #FFF;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const NotificationCounterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #0d9488;
`;

export const DateContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

export const HelloText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const DateText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;


export const GroupsContainer = styled.TouchableOpacity`
  background-color: #FFF;
  border-radius: 8px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GroupContainerTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0d9488;
`;


export const AverageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 32px;
`;

export const RecentGamesContainer = styled.View`
  width: 100%;
`;

export const RecentGameCard = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 2px solid #0d9488;
  justify-content: space-between;
  align-items: center;
`;

export const RecentGameCardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const RecentGameCardDate = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
`;

export const RecentGameCardSubtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #000;
`;

export const AverageCard = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 12px 0;
  width: 48%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
`;

export const AverageCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0d9488;
`;

export const AverageText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
  gap: 16px;
`;

export const GamesPlayedLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #767676;
`;

export const ArsenalStatsCard = styled.View`
  border-radius: 8px;
  padding: 0 0 8px 0;
  width: 60%;
  height: 172px;
  justify-content: space-between;
  align-items: center;
  border: ${isAndroid ? '3px' : '2px'} solid #0d9488;
`;

export const ArsenalStatsCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const AllTimeScoreCard = styled.View`
  border-radius: 8px;
  width: 35%;
  justify-content: flex-start;
  align-items: center;
  background-color: #0d9488;
  height: 172px;
  border: ${isAndroid ? '3px' : '2px'} solid #0d9488;
`;

export const BallContainer = styled.View`
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SplitsContainer = styled.View`
  margin-top: 16px;
  height: 166px;
`;

export const ScoreItemContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FloatingAverageContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  height: 100px;
  background-color: #FFF;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
`;

export const FloatingAverageTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const FloatingAverageLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
export const FloatingStatsContainer = styled.View`
  margin-top: 4px;
  height: 56px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const StatsText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const StatsBadge = styled.View`
  width: 36px;
  height: 36px;
  background-color: #0d9488;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const StatsBadgeText = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const FloatingContent = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;


export const SplitLinkContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const SeeMoreSplitsText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #0d9488;
`;
