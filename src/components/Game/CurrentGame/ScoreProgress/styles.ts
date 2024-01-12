import styled from 'styled-components/native';

export const Container = styled.View`
  height: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ScoreText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const ScoreContainer = styled.View`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProgressContainer = styled.View`
  background-color: #FFF;
  border-radius: 8px;
  width: 75%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid #0D9488;
`;

export const ProgressValueContainer = styled.View`

`;

export const MaxContainer = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: #FFF;
  border: 2px solid #0D9488;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -4px;
`;

export const MaxValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;
