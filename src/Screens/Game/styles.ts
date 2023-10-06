import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Frames = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 8px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px 0 24px;
  item-align: center;
  justify-content: start;
`;

export const ScoreButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 170px;
  right: 20px;
  background-color: #0d9488;
  border-radius: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ScoreButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const FloatingScoreButtonContainer = styled.View``;


export const SplitContainer = styled.View`
  position: absolute;
  bottom: 130px;
  right: 20px;
  background-color: #FFF;
  border: 2px solid #0d9488;
  border-radius: 8px;
  padding: 4px;
  justify-content: center;
  align-items: center;
`;

export const SplitButtonText = styled.Text`
  color: #0d9488;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0,0,0,0.8);
  flex: 1;
  justify-content: center;
  z-index: 999;
`;
