import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-bottom: 36px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
  gap: 12px;
`


export const SearchButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 8px;
  background-color: #0d9488;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  padding: 0 8px;
`;

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
`;


export const GamesContainer = styled.View`
  flex: 1;
  margin-top: 16px;
`;
