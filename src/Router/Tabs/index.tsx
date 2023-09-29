import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home } from '../../Screens/Home';
import { Game } from '../../Screens/Game';
import { Games } from '../../Screens/Games';
import { Equipments } from '../../Screens/Equipments';
import { Profile } from '../..//Screens/Profile';
import { View } from 'react-native';

import { BallIcon } from '../../components/Icons/BallIcon';
import { ThreePinIcon } from '../../components/Icons/ThreePinIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { BagIcon } from '../../components/Icons/BagIcon';
import { ProfileIcon } from '../../components/Icons/ProfileIcon';

export function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
        initialRouteName='Game'
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? -32: 16,
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <HomeIcon
                  height={32}
                  width={32}
                  color={focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Games"
          component={Games}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? -32: 16,
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <ThreePinIcon
                  height={32}
                  width={32}
                  color={focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Game"
          component={Game}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? -32: 16,
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BallIcon
                  height={32}
                  width={32}
                  color={focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Equipments"
          component={Equipments}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: focused ? -32: 16,
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BagIcon
                  height={32}
                  width={32}
                  color={focused ? "#FFF":"#0d9488"}
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
                  marginTop: focused ? -32: 16,
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}>
                <ProfileIcon
                  height={32}
                  width={32}
                  color={focused ? "#FFF":"#0d9488"}
                />
              </View>
            )
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
