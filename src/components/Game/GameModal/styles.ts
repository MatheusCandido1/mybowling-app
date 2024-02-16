import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 8px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const InputContainer = styled.View``;

export const GroupSelectButton = styled.View`
  width: 100%;
  height: 48px;
  background-color: #0d9488;
  border-radius: 8px;
  padding: 2px;
  flex-direction: row;
`;

export const GroupButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const GroupButtonLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const OnGoingHeader = styled.View`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GroupButtonQuantity = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;

export const GroupButtonQuantityText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
`;

export const SwitchContainer = styled.View`
`;

export const SwitchContent = styled.View`
flex-direction: row;
align-items: center;
gap: 8px;
justify-content: space-between;
`;

export const SwitchLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0d9488;
`;

export const SwitchMessage = styled.Text`
  font-size: 12px;
  color: #0d9488;
`;

export const NoGamesFoundContainer = styled.View``;

export const NoGamesFoundText = styled.Text`
  font-size: 14px;
  color: #000;
  text-align: center;
`;
