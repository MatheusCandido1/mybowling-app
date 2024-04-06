import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background: rgba(0,0,0,0.6);
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
`;

export const PopupContainer = styled.View`
  height: 200px;
  width: 100%;
  background-color: #FFF;
  border-radius: 16px;
  padding: 12px 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PopupHeader = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;

export const PopupTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const PopupContent = styled.View`
  margin-top: 16px;
`;

export const PopupText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const PopupFooter = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 16px;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const PopupButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #FFF;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
  gap: 4px;
  border-width: 2px;
  border-color: #0d9488;
`;

export const PopupButtonText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: bold;
`;
