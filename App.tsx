import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import 'react-native-gesture-handler';
import Toast, { BaseToast } from 'react-native-toast-message';
import { AuthProvider } from "./src/contexts/AuthContext";
import { AppWrapper } from "./src/Wrappers/AppWrapper";

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
  info: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#87CEFA',
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
     }}
     text1NumberOfLines={3}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
      }}
    />
  ),
  warning: (props: any) => (
    <BaseToast
    {...props}
    style={{
      borderLeftColor: '#ffb347',
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
  error: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#dc3545',
        elevation: 5,
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
     }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  )
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
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
        <Toast
          topOffset={60}
          config={toastConfig}
        />
    </QueryClientProvider>
  );
}


