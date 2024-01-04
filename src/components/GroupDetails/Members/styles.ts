import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: 16px;
`;


export const PreHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const HeaderLabel = styled.Text`
  font-weight: bold;
  color: #0d9488;
`;

export const MemberRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  border-bottom-width: 2px;
  border-bottom-color: #0d9488;
  border-radius: 8px;

`;

export const Label = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #0fab9e;
  padding: 8px;
  border-radius: 8px;
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const RoleBadge = styled.View`
  background-color: #0d9488;
  padding: 6px 4px;
  border-radius: 8px;
`;

export const RoleBadgeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
