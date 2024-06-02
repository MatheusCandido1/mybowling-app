import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FFF;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #b6dedb;
  height: 40px;
  border-radius: 14px;
  padding: 4px;
`;

export const Option = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #b6dedb;
  width: 33%;
  height: 100%;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #FFF;
`;

export const PodiumContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  margin-top: 24px;
`;

export const RankedUsers = styled.View`
  flex: 1;
  margin-top: 32px;
`;

