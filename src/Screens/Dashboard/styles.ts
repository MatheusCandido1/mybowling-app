import styled from 'styled-components/native';

import { isAndroid } from '../../utils/getOS';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Navbar = styled.View`
  padding: 24px;
  height: 225px;
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

export const AverageCard = styled.View`
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

export const SplitStatsContainer = styled.View`
  width: 65%;
  align-items: center;
`;

export const SplitTitleContainer = styled.View`
  background-color: #0d9488;
  border-radius: 8px;
  padding: 4px 8px;
`;

export const SplitTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const SplitItemContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #0d9488;
  border-top-width: 2px;
  border-top-color: #0d9488;
  flex-direction: row;
  padding: 8px;
`;
