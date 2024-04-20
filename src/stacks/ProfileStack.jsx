import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile, OrdersScreen, OrderTrackingScreen } from "../screens";




const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTrackingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
