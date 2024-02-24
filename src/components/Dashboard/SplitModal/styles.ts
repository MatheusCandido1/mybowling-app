import styled from "styled-components/native";

import { SplitModalHeight } from '../../../utils/modalHeightByDevice';


export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  margin-top: ${SplitModalHeight()!.px};
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

export const Body = styled.View`
  flex: 1;
  padding: 0 28px;
`;


export const FilterContainer = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  elevation: 9999;
  z-index: 9999;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SortContainer = styled.View`
  width: 48%;
`;

export const PinsFilter = styled.View`
  width: 48%;
`;

export const Content = styled.ScrollView``;

export const Footer = styled.View`
  height: 36px;
`;
export const EmptySplitContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptySplitText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;


export const EmptySplitButton = styled.TouchableOpacity`
  width: 50%;
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #0d9488;
  gap: 8px;
`;

export const EmptySplitButtonText = styled.Text`
  font-size: 16px;
  color: #0d9488;
  font-weight: 500;
`;
