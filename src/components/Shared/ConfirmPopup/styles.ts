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
  justify-content: space-between;
  align-items: flex-start;
`;

export const PopupHeader = styled.View`
  justify-content: space-between;
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

`;

export const PopupText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const PopupFooter = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;

`;

export const ConfirmActionButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

export const ConfirmActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const CancelActionButton = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #D3D3D3;
`;

export const CancelActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #36454F;
`;
