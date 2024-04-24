import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, HomeScreen } from "../screens";
import VoucherScreen from "../screens/Voucher";
import CheckoutScreen from "../screens/Cart/Checkout";
import SuccessScreen from "../screens/Cart/SuccessScreen";
const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutSuccessfully"
        component={SuccessScreen}
        options={{
          headerShown: false,
        }}
      />
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
export default CartStack;
