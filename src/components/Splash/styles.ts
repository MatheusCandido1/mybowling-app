import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background-color: rgba(0,0,0, 0.75);
  justify-content: center;
  align-items: center;
`;

export const HorizontalRow = styled.View`
  height: 2px;
  width: 75%;
  background-color: #0d9488;
  border-radius: 4px;
  margin-top: 4px;
`;
