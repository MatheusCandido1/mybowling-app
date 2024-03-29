import styled from 'styled-components/native';

export const Container = styled.View`
  height: 180px;
  border-radius: 8px;
  border: 3px solid #0d9488;
  width: 100%;
  elevation: 4;
  background-color: #FFF;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #0d9488;
  height: 36px;
  padding: 0 4px;
`;

export const HeaderText = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const DateBadge = styled.View`
  background-color: #0d9488;
  border-radius: 8px;
  padding: 6px;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
`;

export const ScoreContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
`;

export const ScoreText = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export const FrameContainer = styled.View`
  flex: 1;
  width: 100%;
  items-align: center;
  justify-content: center;
`;

export const FrameNumberLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #000;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 16px;

`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export const FrameNumberContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SecondFooter   = styled.View`
  width: 100%;
  height: 40px;
  background-color: #0d9488;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;

export const SwipeContainer = styled.View`
  height: 100%;
  width: 124px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;


export const PrintButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  padding: 8px;
  border-radius: 8px;
  flex-direction: row;
  width: 90px;
  gap: 4px;
  border: 2px solid #ffb347;
`;

export const PrintButtonText = styled.Text`
  font-size: 14px;
  color: #ffb347;
  font-weight: bold;
  text-align: center;
`;

export const EditButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  padding: 8px;
  border-radius: 8px;
  flex-direction: row;
  width: 90px;
  gap: 4px;
  border: 2px solid #3eb0f7;
`;

export const EditButtonText = styled.Text`
  font-size: 14px;
  color: #3eb0f7;
  font-weight: bold;
  text-align: center;
`;


export const DeleteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  padding: 8px;
  border-radius: 8px;
  flex-direction: row;
  width: 90px;
  gap: 4px;
  border: 2px solid #D2042D;
`;

export const DeleteButtonText = styled.Text`
  font-size: 14px;
  color: #D2042D;
  font-weight: bold;
  text-align: center;
`;


