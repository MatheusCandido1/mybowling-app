import styled from "styled-components/native";

import { isDeviceSmall } from "../../../utils/deviceDimensions";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.4);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${isDeviceSmall ? '250px':'390px'};
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
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const BallContainer = styled.View`
`;

export const LocationContainer = styled.View`
margin-top: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const ButtonContainer = styled.View`
  width: 48%;
`;

