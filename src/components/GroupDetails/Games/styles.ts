import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  margin-bottom: 8px;
`


export const FilterText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;

export const FilterContainer = styled.View`
  gap: 4px;
`;

export const FilterItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  width: 100%;
`;

