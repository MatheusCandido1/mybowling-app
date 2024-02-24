import styled from 'styled-components/native';

export const SplitItemContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #0d9488;
  border-top-width: 2px;
  border-top-color: #0d9488;
  flex-direction: row;
  padding: 8px;
`;

export const PinsContainer = styled.View`
  width: 35%;
`;


export const SplitsContainer = styled.View`
  margin-top: 16px;
  height: 166px;
`;

export const SplitStatsContainer = styled.View`
  width: 65%;
  align-items: center;
`;

export const SplitTitleContainer = styled.View`
  background-color: #0d9488;
  border-radius: 8px;
  padding: 4px 8px;
`;

export const SplitTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;
