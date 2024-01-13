import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const PinsBadge = styled.View`
  background-color: #0D9488;
  border-radius: 8px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PinsBadgeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
`;

export const ScoreInput = styled.TextInput`
  width: 112px;
  height: 112px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 56px;
  font-weight: bold;
  color: #000;
  border: 2px solid #0D9488;
`;

export const ScoreContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: 0px;
`;
