import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  justify-content: space-between;
  flex-direction: row;
  border: 2px solid #0d9488;
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

export const ButtonContainer = styled.View`
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
