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
  padding: 0 16px;
`;

export const PopupContainer = styled.View`
  width: 100%;
  background-color: #FFF;
  border-radius: 16px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: flex-start;
  top: 250px;
  position: absolute;
`;

export const PopupHeader = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;

export const PopupTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const PopupContent = styled.View`
  padding: 12px 0;
`;

export const AuthorContainer = styled.View`
  margin-top: -12px;
  margin-bottom: 12px;
`;

export const Author = styled.Text`
  font-size: 12px;
  color: #808080;
`;

export const PopupFooter = styled.View`
  width: 100%;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #FFF;
  border-radius: 4px;
`;

export const Date = styled.Text`
  font-weight: 500;
  color: #808080;
  font-size: 12px;
`;
