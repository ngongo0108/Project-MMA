import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppointmentScreen } from "../screens";
import Booking from "../screens/Appoinment/Booking";
import Protected from "./protect/protectStack";
const AppointmentStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Appointment">
      <Stack.Screen name="Appointment" options={{ headerShown: false, headerStyle: {backgroundColor: '#e6417b', }, headerTitleStyle: {color: 'white'} }}>
        {() => <Protected  Component={AppointmentScreen} />}
      </Stack.Screen>
      <Stack.Screen name="Booking" options={{ headerShown: false }}>
        {() => <Protected Component={Booking} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AppointmentStack;
