import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.6);
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const DropdownContainer = styled.View`
  margin-top: -64px;
  width: 90%;
  height: 400px;
  background-color: #FFF;
  border-radius: 8px;
`;

export const DropdownContent = styled.View`
  padding: 16px;
  flex: 1;
`;

export const SectionContainer = styled.View`

`;

export const AlleysCount = styled.Text`
  font-size: 10px;
  color: #333;
  margin-top: -10px;
  margin-bottom: 2px;
  text-align: center;
`;

export const SectionText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SubSectionContainer = styled.Pressable`
  margin-top: 8px;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubSectionText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const ItemContainer = styled.TouchableOpacity`
  margin-top: 8px;
  border-radius: 4px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

export const ItemText = styled.Text`
  font-size: 14px;
`;

export const LocationContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const AlleysContainer = styled.View`
  flex: 1;
`;

export const EmptyResultContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
