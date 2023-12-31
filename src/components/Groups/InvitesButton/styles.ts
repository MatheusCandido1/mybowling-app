import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #FFF;
  position: absolute;
  top: 12px;
  right: 16px;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const Badge = styled.View`
  background-color: #0fab9e;
  border-radius: 8px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0fab9e;
`;
