import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #0d9488;
  padding: 0 8px;
`;

export const InitialLabel = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const DropdownArea = styled.View`
  position: absolute;
  width: 100%;
  height: auto;
  background-color: #FFF;
  top: 48px;
  right: 0;
  border-radius: 8px;
  padding:  8px;
  gap: 8px;
`;

export const SplitButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #0d9488;
  padding: 8px;
`;

export const SplitHeader = styled.View`
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border: 2px solid #0d9488;
  padding: 8px;
`;

export const SplitHeaderText = styled.Text`
  font-size: 12px;
  color: #0d9488;
  font-weight: bold;
`;

export const SplitButtonTitle = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const BoardArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

