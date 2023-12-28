import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #0d9488;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  padding: 0 16px;
  width: 100%;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 33%;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 33%;
`;

export const MiddleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
