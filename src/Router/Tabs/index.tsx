import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Dashboard } from '../../Screens/Dashboard';
import { GameWrapper } from '../../Wrappers/GameWrapper';
import { GamesWrapper } from '../../Wrappers/GamesWrapper';
import { Arsenal } from '../../Screens/Arsenal';
import { Profile } from '../..//Screens/Profile';
import { View } from 'react-native';

import { BallIcon } from '../../components/Icons/BallIcon';
import { ScoreboardIcon } from '../../components/Icons/ScoreboardIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { BagIcon } from '../../components/Icons/BagIcon';
import { ProfileIcon } from '../../components/Icons/ProfileIcon';
import { isIpad } from '../../utils/getDevice';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"


export function Tabs() {

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
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarStyle: {
            height: isIpad() ?  90 : 75,
            backgroundColor: '#0d9488',
            borderTopWidth: 0,
          }
        }}
        initialRouteName='Dashboard'
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? ( isIpad() ? -84 : 30): ( isIpad() ? -4 : 30),
                  backgroundColor: !focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <HomeIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={!focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Games"
          component={GamesWrapper}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: 30,
                  backgroundColor: !focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
               <ScoreboardIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={!focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Game"
          component={GameWrapper}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? ( isIpad() ? -84 : 30): ( isIpad() ? -4 : 30),
                  backgroundColor: !focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BallIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={!focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Equipments"
          component={Arsenal}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? ( isIpad() ? -84 : 30): ( isIpad() ? -4 : 30),
                  backgroundColor: !focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BagIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={!focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? ( isIpad() ? -84 : 30): ( isIpad() ? -4 : 30),
                  backgroundColor: !focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,

                }}>
                <ProfileIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={!focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
