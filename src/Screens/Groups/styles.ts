import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const NewGroupButton = styled.TouchableOpacity`
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  background-color: #0D9488;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const NewGroupButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const GroupsList = styled.View`
  margin-top: 16px;
  flex: 1;
`;


export const AddMemberContainer = styled.TouchableOpacity`
  height: 40px;
  padding: 0 8px;
  background-color: #FFF;
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 999;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2px;
`;

export const AddMemberText = styled.Text`
  color: #0d9488;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
