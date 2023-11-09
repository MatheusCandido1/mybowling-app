import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Stack } from "./src/Router/Stack";
import { Tabs } from './src/Router/Tabs';
import { FirstAccessStack } from "./src/Router/FirstAccessStack";

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

        {/* <Tabs /> */}
        <Tabs />
        {/* <Stack /> */}
        {/* <FirstAccessStack /> */}
        <Toast
          topOffset={60}
          config={toastConfig}
        />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}


