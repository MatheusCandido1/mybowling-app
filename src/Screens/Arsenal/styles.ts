import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NewBallButton = styled.TouchableOpacity`
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  background-color: #0D9488;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const NewBallButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const BallItemContainer = styled.TouchableOpacity`
  height: 72px;
  border: 2px solid #0D9488;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const BallItemInformationContainer = styled.View`
  width: 70%;
  background-color: #0D9488;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BallItemText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #FFF;
`;

export const BallItemIconContainer = styled.View`
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


