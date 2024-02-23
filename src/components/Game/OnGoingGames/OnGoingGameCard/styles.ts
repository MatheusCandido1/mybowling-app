import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  justify-content: space-between;
  flex-direction: row;
  border: 2px solid #0d9488;
  elevation: 4;
  background-color: #FFF;
`;

export const InformationContainer = styled.View`
  width: 80%;
  height: 100%;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

export const InformationText = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const InformationItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0d9488;
`;

export const Button = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const SwipeContainer = styled.View`
  height: 100%;
  width: 124px;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
