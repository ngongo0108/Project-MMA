import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppointmentScreen } from "../screens";
const AppointmentStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Appointment">
      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppointmentStack;
