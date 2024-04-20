import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProductsScreen, DetailProductScreen } from "../screens";
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
