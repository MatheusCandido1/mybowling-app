import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Splash } from './src/components/Splash';
import { Tabs } from './src/Router/Tabs';
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs />
    </>
  );
}


