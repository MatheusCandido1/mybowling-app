import { createStackNavigator } from '@react-navigation/stack';
import { GroupsWrapper } from '../../Wrappers/GroupsWrapper';
import { GroupWrapper } from '../../Wrappers/GroupWrapper';
import { NotificationsWrapper } from '../../Wrappers/NotificationsWrapper';

const StackNavigator = createStackNavigator();

export function InternalStack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen
        name="groups"
        component={GroupsWrapper}
        initialParams={{ showInvites: false }}
      />
      <StackNavigator.Screen name="group" component={GroupWrapper} />
      <StackNavigator.Screen name="notifications" component={NotificationsWrapper} />
     </StackNavigator.Navigator>
  );
}
