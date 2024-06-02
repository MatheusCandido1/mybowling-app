import styled from 'styled-components/native';

export const FirstPlaceContainer = styled.View`
  background-color: #FFF;
  border-width: 4px;
  align-items: center;
  justify-content: center;
`;

export const FirstPlaceImage = styled.Image`
  width: 98px;
  height: 98px;
  border-radius: 40px;
`;


export const FirstPlaceName = styled.Text`
  font-size: 24px;
  color: #000;
`;


export const FirstPlacePosition = styled.View`
  position: absolute;
  bottom: -16px;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const FirstPlacePositionText = styled.Text`
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
`;
