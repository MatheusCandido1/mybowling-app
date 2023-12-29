import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { MainTabs } from '../MainTabs';
import { GroupStack } from '../GroupStack';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0d9488',
      }}
    >
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={MainTabs} />
        <Stack.Screen name="GroupStack" component={GroupStack} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}
