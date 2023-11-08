import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 8px;
  gap: 8px;
`;

export const ScoreInput = styled.TextInput`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #000;
  border: 2px solid #0D9488;
`;

export const ScoreContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
