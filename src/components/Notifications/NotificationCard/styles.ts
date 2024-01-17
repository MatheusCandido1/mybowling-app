import styled from 'styled-components/native';

export const Container = styled.View`
  height: 164px;
  border:2px solid #0d9488;
  border-radius: 8px;
  justify-content: space-between;
`;

export const NewMessageContainer = styled.View`
  position: absolute;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  background-color: #0d9488;
  top: 8px;
  left: 8px;
`;

export const NewMessageText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  gap: 4px;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Content = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  padding: 12px 8px;
  justify-content: space-between;
`;

export const AuthorContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #808080;
`;

export const FooterContainer = styled.View`
  background-color: #0d9488;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #FFF;
  border-radius: 4px;
  padding: 2px 8px;
`;

export const Date = styled.Text`
  font-weight: bold;
  color: #0d9488;
  font-size: 12px;
`;


export const ActionContainer = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const ToggleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
`;


export const ActionButton = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  background-color: #0d9488;
`;

export const ActionButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
  padding: 0 4px;
`;
