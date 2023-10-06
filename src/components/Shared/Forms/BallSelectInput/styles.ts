import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  items-align: center;
  justify-content: center;
`;

export const BallContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #0d9488;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 2;
  right: 2;
  justify-content: center;
  align-items: center;
`;
