import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VoucherScreen from "../screens/Voucher";
import CheckoutScreen from "../screens/Cart/Checkout";
import SuccessScreen from "../screens/Cart/SuccessScreen";
import { CartScreen, HomeScreen } from "../screens";

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
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen
        name="CheckoutSuccessfully"
        component={SuccessScreen}
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
