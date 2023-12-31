import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: 300px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 28px;
`;

export const InviteContainer = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 2px solid #dcdcdc;
`;

export const InviteHeader = styled.View`
  background-color: #dcdcdc;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  flex-direction: row;
  gap: 8px;
`;

export const InviteHeaderText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const InviteImage = styled.View`
  height: 100px;
  width: 100%;
  padding: 24px;
  background-color: #F5F5F5;
`;

export const InviteInformation = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 16px;
`;

export const InviteTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const InviteSubTitle = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  width: 100%;
  text-align: center;
`;

export const InviteFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-top: 8px;
  gap: 8px;
  margin-bottom: 16px;
`;

export const AcceptInviteButton = styled.TouchableOpacity`
  background-color: #0d9488;
  width: 35%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  flex-direction: row;
`;

export const AcceptInviteButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const RejectInviteButton = styled.TouchableOpacity`
background-color: #dc3545;
width: 35%;
border-radius: 4px;
justify-content: center;
align-items: center;
padding: 8px 0;
flex-direction: row;

`;

export const RejectInviteButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;




