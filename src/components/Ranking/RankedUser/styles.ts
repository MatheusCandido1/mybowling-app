import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 100%;
  height: 52px;
  background-color: #FFF;
  border-radius: 14px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border: 2px solid #F6F6F6;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;


export const Rank = styled.Text`
  font-size: 14px;
  color: #0d9488;
  font-weight: bold;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 500;
`;

export const ResultContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #b6dedb;
  padding: 8px;
  border-radius: 8px;
`;

export const Result = styled.Text`
  font-size: 14px;
  color: #323232;
  font-weight: bold;
`;
