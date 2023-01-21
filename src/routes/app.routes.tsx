import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home";
import { Habit } from "../screens/Habit";
import { New } from "../screens/New";

const { Navigator, Screen }  = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="habit" component={Habit} />
      <Screen name="new" component={New} />
    </Navigator>
  )
}

export { AppRoutes }