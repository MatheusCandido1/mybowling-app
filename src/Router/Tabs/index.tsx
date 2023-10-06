import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home } from '../../Screens/Home';
import { GameWrapper } from '../../Wrappers/GameWrapper';
import { Games } from '../../Screens/Games';
import { Equipments } from '../../Screens/Equipments';
import { Profile } from '../..//Screens/Profile';
import { View } from 'react-native';

import { BallIcon } from '../../components/Icons/BallIcon';
import { ThreePinIcon } from '../../components/Icons/ThreePinIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { BagIcon } from '../../components/Icons/BagIcon';
import { ProfileIcon } from '../../components/Icons/ProfileIcon';
import { isIpad } from '../../utils/getDevice';


export function Tabs() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarStyle: {
            height: isIpad() ?  90 : 70,
          }
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
                  marginTop: focused ? ( isIpad() ? -84 : -32): ( isIpad() ? -4 : 16),
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <HomeIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
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
                  marginTop: focused ? ( isIpad() ? -84 : -32): ( isIpad() ? -4 : 16),
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <ThreePinIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
                  color={focused ? "#FFF":"#0d9488"}
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
                  marginTop: focused ? ( isIpad() ? -84 : -32): ( isIpad() ? -4 : 16),
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BallIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
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
                  marginTop: focused ? ( isIpad() ? -84 : -32): ( isIpad() ? -4 : 16),
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}
              >
                <BagIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
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
                  marginTop: focused ? ( isIpad() ? -84 : -32): ( isIpad() ? -4 : 16),
                  backgroundColor: focused ? '#0d9488' : '#FFF',
                  padding: focused ? 10 : 0,
                  borderRadius:focused ? 8 : 0,
                }}>
                <ProfileIcon
                  height={isIpad() ? 44:32}
                  width={isIpad() ? 44:32}
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
