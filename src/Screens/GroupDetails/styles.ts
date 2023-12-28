import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

export const HeaderGroup = styled.View`
  height: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #0d9488;
  border-radius: 8px;
  overflow: hidden;
`;

export const HeaderGroupButton = styled.TouchableOpacity`
  width: 33.333%;
  height: 100%;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const HeaderGroupButtonText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
  text-align: center;
`;

export const AddMemberContainer = styled.TouchableOpacity`
  height: 40px;
  padding: 0 8px;
  background-color: #FFF;
  position: absolute;
  top: -56px;
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



