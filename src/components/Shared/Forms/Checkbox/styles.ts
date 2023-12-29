import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  border: 2px solid #FFF;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.TouchableOpacity``;

export const CheckBoxText = styled.Text`
  color: #FFF;
  font-size: 12px;
  margin-left: 8px;
`;
