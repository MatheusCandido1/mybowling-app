import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
  border: 4px solid #0D9488;
  elevation: 2;
`;

export const InformationContainer = styled.View`
  width: 35%;
  height: 100%;
  flex-direction: row;
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

export const ShotInformationContainer = styled.View`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BoardContainer = styled.View`
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const SplitFrameContainer = styled.View`
padding-right: 16px;

`;

export const NoDataAvailableContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const NoDataAvailableText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const CloseFrameContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

`;

export const CloseFrameText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #000;
`;

export const CloseFrameSubText = styled.Text`
  font-size: 14px;
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
