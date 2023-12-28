import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { FirstAccess } from '../../Screens/FirstAccess';

const StackNavigator = createStackNavigator();

export function Welcome() {
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
          <StackNavigator.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <StackNavigator.Screen name="login" component={FirstAccess} />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
