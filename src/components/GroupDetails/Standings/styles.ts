import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Table = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const TableBody = styled.View`
  border: 2px solid #0d9488;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #0d9488;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 40px;
`;

export const TableRow = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #0d9488;

  height: 40px;
  width: 100%;
  flex-direction: row;
`;

export const TableCell = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const TableCellText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
