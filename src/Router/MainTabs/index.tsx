import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { Dimensions } from 'react-native';

import { Dashboard } from '../../Screens/Dashboard';
import { GameWrapper } from '../../Wrappers/GameWrapper';
import { GamesWrapper } from '../../Wrappers/GamesWrapper';
import { ArsenalWrapper } from '../../Wrappers/ArsenalWrapper';
import { ProfileWrapper  } from '../../Wrappers/ProfileWrapper';
import { View } from 'react-native';

import { BallIcon } from '../../components/Icons/BallIcon';
import { ScoreboardIcon } from '../../components/Icons/ScoreboardIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { BagIcon } from '../../components/Icons/BagIcon';
import { ProfileIcon } from '../../components/Icons/ProfileIcon';
import { isIpad } from '../../utils/getDevice';
import { isAndroid } from '../../utils/getOS';


export function MainTabs() {
  const { height } = Dimensions.get('window');

  const shouldAddMargin = height > 750;

  const setDefaultMarginTop = isAndroid ? 0 : (shouldAddMargin ? 30 : 0);

  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarStyle: {
            height: 75,
            backgroundColor: '#0d9488',
            borderTopWidth: 0,
          }
        }}
        initialRouteName='Dashboard'
        backBehavior={'firstRoute'}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: setDefaultMarginTop,
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
                  marginTop: setDefaultMarginTop,
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
                  marginTop: setDefaultMarginTop,
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
          name="Arsenal"
          component={ArsenalWrapper}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: setDefaultMarginTop,
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
          component={ProfileWrapper}
          options={{
            title: 'Games',
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  marginTop: setDefaultMarginTop,
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
  );
}
