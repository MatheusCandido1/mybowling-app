import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px 24px 16px;
`;

export const FrameSwiper = styled.View`
  height: 125px;
  background-color: #FFF;
  width: 100%;
  padding: 8px 0;
`;

export const FrameContainer = styled.Pressable`
  width: 135px;
  border: 2.5px solid #ABB2B9;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentFrameContainer = styled.View`
  flex: 1;
`;

export const SplitContainer = styled.View`
  position: absolute;
  bottom: 80px;
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



