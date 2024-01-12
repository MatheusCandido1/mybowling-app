import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const ScoreCard = styled.View`
  flex: 1;
  items-align: center;
  justify-content: center;
  gap: 4px;
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

export const ResultContainer = styled.View`
  height: 20px;
  flex-direction: row;
`;

export const SplitResultContainer = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border-color: #000;
  border-width: 1px;
`;


