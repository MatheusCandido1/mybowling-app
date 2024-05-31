import styled from "styled-components/native";

import { AdditionalInformationModalHeight } from '../../../utils/modalHeightByDevice';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${AdditionalInformationModalHeight()!.px};
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


export const InputContainer = styled.View``;

export const InformationContainer = styled.View`
  margin-bottom: 16px;
  border: rgba(13,148,136, 1);
  border-width: 2px;
  padding: 10px;
  border-radius: 8px;
`;

export const InformationText = styled.Text`
  color: #0d9488;
  font-weight: 500;
`;
