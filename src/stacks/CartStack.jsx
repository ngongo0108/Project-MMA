import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";
import VoucherScreen from "../screens/Voucher";
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
    </Stack.Navigator>
  );
};
export default CartStack;
