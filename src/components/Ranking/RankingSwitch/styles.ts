import styled from 'styled-components/native';

export const Container = styled.View`
  width: 120px;
  padding: 4px;
  height: 32px;
  border-radius: 12px;
  background-color: #FFF;
  position: absolute;
  top: 18px;
  right: 12px;
  flex-direction: row;
`;

export const Option = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OptionText = styled.Text`
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
`;
