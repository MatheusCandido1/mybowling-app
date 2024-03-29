import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { Login } from '../../Screens/Auth/Login';
import { Register } from '../../Screens/Auth/Register';
import { ResetPassword } from '../../Screens/Auth/ResetPassword';
import { NewPassword } from '../../Screens/Auth/NewPassword';

const StackNavigator = createStackNavigator();

export function AuthStack() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}
      >
      <StatusBar style="dark" />
        <NavigationContainer>
          <StackNavigator.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <StackNavigator.Screen name="login" component={Login} />
            <StackNavigator.Screen name="register" component={Register}  />
            <StackNavigator.Screen name="resetPassword" component={ResetPassword} />
            <StackNavigator.Screen
              name="newPassword"
              component={NewPassword}
              options={{
                gestureEnabled: false,
              }}
             />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
