import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Tabs } from './src/Router/Tabs';
import { NativeBaseProvider } from "native-base";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#0d9488',
     }}
      contentContainerStyle={{
        paddingHorizontal: 15,
     }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),
}

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Tabs />
      <Toast
        topOffset={60}
        config={toastConfig}
      />
    </NativeBaseProvider>
  );
}


