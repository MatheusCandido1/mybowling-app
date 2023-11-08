import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Tabs } from './src/Router/Tabs';
import { NativeBaseProvider } from "native-base";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar style="light" />
        <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#0d9488',
          }}
        >
        <Tabs />
        <Toast
          topOffset={60}
          config={toastConfig}
        />

        </SafeAreaView>
      </SafeAreaProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}


