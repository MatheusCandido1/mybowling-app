import styled from "styled-components/native";
import { UpdateGroupModalHeight } from "../../../utils/modalHeightByDevice";


export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${UpdateGroupModalHeight()?.px};
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
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #E83F5B;
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const DeleteButtonText = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const DeleteGroupContainer = styled.View`
  border-radius: 8px;
  width: 100%;
  background-color: #FFF;
  padding: 8px 12px;
  width: 100%;
  margin-top: 64px;
`;

export const DeleteGroupLink = styled.TouchableOpacity`
`;

export const DeleteGroupTitle = styled.Text`
  font-size: 16px;
  color: #E83F5B;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #E83F5B;
`;

export const DeleteGroupText = styled.Text`
  font-size: 14px;
  color: #000;
  text-align: center;
  margin-top: 12px;
`;

