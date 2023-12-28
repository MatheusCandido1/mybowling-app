import styled from 'styled-components/native';

export const SplitContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  position: absolute;
  bottom: 110px;
  right: 0px;
  z-index: 9999;
`;

export const SplitButtonText = styled.Text`
  color: #0d9488;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const SplitButtonContainer = styled.View`
  background-color: #FFF;
  border: 2px solid #0d9488;
  border-radius: 8px;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: row;
`;
