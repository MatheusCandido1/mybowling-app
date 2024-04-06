import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  margin-left: 2px;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkText = styled.Text`
  color: #0d9488;
  font-weight: bold;
  text-decoration: underline;
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
