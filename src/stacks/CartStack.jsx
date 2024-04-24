import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";

import VoucherScreen from "../screens/Voucher";

import Protected from "./protect/protectStack";

const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="Cart" options={{ headerShown: false }}>
        {() => <Protected Component={CartScreen} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
};
export default CartStack;
