import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  border: 1px solid #C5C5C5;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  width: 100%;
  text-align: center;
`;


export const Description = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #000;
  text-align: center;
  width: 100%;
`;

export const MembersContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 100%;
  gap: -8px;
`;

export const MemberNumberContainer = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #0D9488;
  justify-content: center;
  align-items: center;
`;

export const MemberNumber = styled.Text`
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
`;
