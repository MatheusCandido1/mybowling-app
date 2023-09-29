import styled from 'styled-components/native';


export const Card = styled.View`
  width: 150px;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: #0d9488;
  padding: 8px;
`;

export const FrameNumber = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const ScoreInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 8px;
`;

export const ScoreInput = styled.TextInput`
  width: 50%;
  background-color: #FFF;
  border-radius: 4px;
  padding: 0 8px;
  height: 30px;
`;

export const ScoreText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
