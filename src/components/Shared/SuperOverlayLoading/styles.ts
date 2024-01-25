import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0,0,0,0.75);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const HorizontalRow = styled.View`
  height: 2px;
  width: 40px;
  border-radius: 4px;
  margin-top: 4px;
`;
