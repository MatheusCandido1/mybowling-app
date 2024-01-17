import styled from 'styled-components/native';

export const MessageContainer = styled.View`
  height: 70px;
`;

export const Message = styled.Text`
  font-size: 12px;
  color: #000;
  text-align: justify;
`;

export const GroupsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const SeeGroupsButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: #0d9488;
  border-radius: 6px;
  gap: 4px;
  height: 28px;
`;

export const SeeGroupsButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
`;
