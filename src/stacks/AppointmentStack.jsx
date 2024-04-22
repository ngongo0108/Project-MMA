import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppointmentScreen } from "../screens";
import Booking from "../screens/Appoinment/Booking";
const AppointmentStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Booking">
      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppointmentStack;
