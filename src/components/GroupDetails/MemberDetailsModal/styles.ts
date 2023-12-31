import styled from "styled-components/native";
import { isDeviceSmall } from "../../../utils/deviceDimensions";


export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${isDeviceSmall ? '300px':'450px'};
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
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-top: 16px;
`;

export const UserEmail = styled.Text`
  font-size: 16px;
  color: #A4A4A4;
  margin-top: 8px;
`;

export const JoinedAt = styled.Text`
  font-size: 16px;
  color: #A4A4A4;
  margin-top: 8px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const RemoveButton = styled.TouchableOpacity`
  border: 2px solid #E83F5B;
  padding: 8px 8px;
  border-radius: 8px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const RemoveButtonText = styled.Text`
  font-size: 16px;
  color: #E83F5B;
  font-weight: bold;
`;
