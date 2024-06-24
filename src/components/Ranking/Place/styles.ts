import styled from 'styled-components/native';

export const FirstPlaceContainer = styled.TouchableOpacity`
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
  font-size: 10px;
  color: #FFF;
  font-weight: bold;
`;

export const FirstPlaceNameHolder = styled.View`
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 16px;
`;

export const PlaceSection = styled.View`
  align-items: center;
  justify-content: center;
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
