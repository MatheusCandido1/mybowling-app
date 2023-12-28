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

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18px;
`;
