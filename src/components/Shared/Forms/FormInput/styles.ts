import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  margin-left: 2px;
`;

export const Input = styled.TextInput`
  height: 44px;
  width: 100%;
  background-color: #FFF;
  border-radius: 8px;
  padding: 0 4px;
  border-bottom-width: 2px;
  font-weight: medium;
  font-size: 16px;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 16px;
  width: 100%;
  margin-top: 2px;
`;


export const ErrorText = styled.Text`
  font-size: 12px;
  color: #940d19;
  font-weight: bold;
  margin-right: 2px;
  text-align: right;
`;
