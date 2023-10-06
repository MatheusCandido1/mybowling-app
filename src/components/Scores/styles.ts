import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 8px;
`;

export const ScoreCard = styled.View`
  flex: 1;
  items-align: center;
  justify-content: center;
`;

export const FrameNumberLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: medium;
  text-align: center;
`;
