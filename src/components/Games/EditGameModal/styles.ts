import styled from "styled-components/native"

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: 250px;
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
`;


export const InputContainer = styled.View``;

export const FrameButton = styled.TouchableOpacity`
  height: 44px;
  background-color: #3eb0f7;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px;
  align-self: flex-start;
  flex-direction: row;
  width: 100%;
`;

export const FrameButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;
