import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 32px 46px;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AvatarRounded = styled.View`
  width: 135px;
  height: 135px;
  border-radius: 68px;
`;

export const UserName = styled.Text`
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Menu = styled.View`
  flex: 1;
  margin-top: 16px;
  justify-content: flex-start;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  gap: 16px;
  border-radius: 8px;
`;

export const MenuItemText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #0d9488;
`;
