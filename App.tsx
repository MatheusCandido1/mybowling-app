import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Tabs } from './src/Router/Tabs';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Tabs />
    </NativeBaseProvider>
  );
}


