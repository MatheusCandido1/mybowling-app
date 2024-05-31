import styled from "styled-components/native";

import { EditProfileModalHeight } from '../../../utils/modalHeightByDevice';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${EditProfileModalHeight()!.px};
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

export const AvatarContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 12px;
`;

export const AvatarButton = styled.TouchableOpacity`
  width: 135px;
  height: 135px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 67.5px;
  z-index: 999;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

