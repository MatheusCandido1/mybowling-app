import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const InformationText = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight: 500;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-top: 4px;
`;

export const ActionButtonText = styled.Text`
  font-size: 12px;
  color: #0d9488;
  font-weight: bold;
`;
