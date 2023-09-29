import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ShadowContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 8px;
  padding: 10px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
`;

export const LegendContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const ScoreContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;

`;
