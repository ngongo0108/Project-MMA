import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";
const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
