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
  margin-top: ${isDeviceSmall ? '215px':'385px'};
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

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 28px;
`;


export const Form = styled.View`
  gap: 8px;
`;

export const ImageSelector  = styled.TouchableOpacity`
  margin-top: 16px;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background-color: #F0F0F0;
  justify-content: center;
  align-items: center;
  border: 1px dashed #000;
  margin-bottom: 12px;
`;

export const ImageSelectorText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
