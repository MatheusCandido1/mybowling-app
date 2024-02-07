import styled from "styled-components/native";

import { AccountSettingsModalHeight } from '../../../utils/modalHeightByDevice';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${AccountSettingsModalHeight()!.px};
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
  padding: 0 24px;
  align-items: center;
`;

export const DeleteAccountTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const DeleteAccountSubtitle = styled.Text`
  margin-top: 16px;
  text-align: justify;
`;

export const DeleteInputContainer = styled.View`
  margin-top: 16px;
  width: 100%;
  align-items: center;
`;

export const DeleteInput = styled.TextInput`
  margin-top: 4px;
  height: 44px;
  width: 100%;
  background-color: #FFF;
  border-radius: 8px;
  padding: 0 12px;
  border: 2px solid #D3D3D3;
  font-weight: medium;
  font-size: 16px;
`;

export const DeleteInputFootNote = styled.Text`
  width: 100%;
  margin-top: 8px;
  font-size: 12px;
  text-align: right;
`;


export const DeleteButton = styled.TouchableOpacity`
  margin-top: 16px;
  height: 44px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #D2042D;
`;

export const DeleteButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;
