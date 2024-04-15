import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
