import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
  border: 4px solid #0D9488;
`;

export const InformationContainer = styled.View`
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const InformationItem = styled.View`
  flex-direction: row;
  gap: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InformationLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: right;
`;

export const InformationResult = styled.Text``;

export const ResultBadge = styled.View`
  justifyContent: center;
  alignItems: center;
  flexDirection: row;
  backgroundColor: #ABB2B9;
  padding: 4px;
  borderRadius: 4px;
`;

export const ResultBadgeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const FrameNumberContainer = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0D9488;
`;

export const FrameNumberLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const FrameNumber = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;


export const BoardContainer = styled.View`
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const FrameContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const FrameText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #000;
`;

export const ScoreContainer = styled.View`
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0D9488;
`;
