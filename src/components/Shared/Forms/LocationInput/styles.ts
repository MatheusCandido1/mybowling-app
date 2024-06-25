import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const LabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  margin-left: 2px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
  border-top-width: 1px;
  border-top-color: #f1f1f1;
  background-color: #efeff0;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: medium;
  color: #000;
`;
