import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

const { Navigator, Screen } = createNativeStackNavigator();

// when you add a new screen, add it here and import it in the app.routes.tsx
// native-stack docs: https://reactnavigation.org/docs/stack-navigator

export function AppRoutes() {
  return (
    <Navigator 
      initialRouteName='groups'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="groups"
        component={Groups}
      />

      <Screen 
        name="new"
        component={NewGroup}
      />

      <Screen 
        name="players"
        component={Players}
      />
    </Navigator>
  );
}