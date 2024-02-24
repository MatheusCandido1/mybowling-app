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

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 28px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const ItemLabel = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 500;
`;

export const OptionContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
