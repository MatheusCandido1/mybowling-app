import { createStackNavigator } from '@react-navigation/stack';
import { GroupsWrapper } from '../../Wrappers/GroupsWrapper';
import { GroupWrapper } from '../../Wrappers/GroupWrapper';

const StackNavigator = createStackNavigator();

export function GroupStack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name="groups" component={GroupsWrapper} />
      <StackNavigator.Screen name="group" component={GroupWrapper} />
     </StackNavigator.Navigator>
  );
}
