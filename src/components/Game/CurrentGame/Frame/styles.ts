import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 135px;
  border: 2.5px solid #ABB2B9;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const FrameNumberContainer = styled.View`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const FrameNumberText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

export const PartialScoreContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const PartialScoreText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

export const FinalScoreContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const FinalScoreText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
`;

export const BadgeContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ABB2B9;
`;
