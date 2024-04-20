import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";
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
    </Stack.Navigator>
  );
};
export default CartStack;
