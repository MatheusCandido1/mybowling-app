import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 12px 16px;
`;

export const ActionsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  gap: 8px;
  width: 100%;
`;

export const ActionTouchable = styled.TouchableOpacity`
  height: 48px;
  border-radius: 8px;
  background-color: #0d9488;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  flex: 1;
  flex-direction: row-reverse;
  gap: 4px;
`;

export const ActionTouchableText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const NumbersRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 16px;
`;

export const NumbersContainer = styled.View`
  flex: 1;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const NumberTouchable = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const NumberTouchableText = styled.Text`
  font-size: 24px;
  font-weight: medium;
  color: #000;
`;


