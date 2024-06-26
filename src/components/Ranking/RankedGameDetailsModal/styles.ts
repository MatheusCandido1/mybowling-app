import styled from "styled-components/native"

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
  margin-top: 132px;
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

export const SubHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const Place = styled.View`
  padding: 4px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const PlaceText = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const InformationContainer = styled.View``;

export const ScoresContainer = styled.View`
  margin-top: 16px;
  gap: 8px;
`;

export const StatsContainer = styled.View`
  margin-top: 16px;
`;

export const StatsSubContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const FramesContainer = styled.View`
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  height: ${isDeviceSmall ? '32px':'60px'};
`;
