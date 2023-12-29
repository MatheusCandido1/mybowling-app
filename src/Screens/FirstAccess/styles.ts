import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0d9488;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 16px;
  background-color: #FFF;
  padding: 12px 8px;
  border-radius: 8px;
  margin-top: 12px;
`;

export const IconContainer = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const ItemText = styled.Text`
  width: 80%;
  font-size: 14px;
  color: #0d9488;
  width: 100%;
  flex-shrink: 1;
  font-weight: 600;
  text-align: center;
`;

export const CheckContainer = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const CheckboxContainer = styled.View`
  gap: 16px;
`;


