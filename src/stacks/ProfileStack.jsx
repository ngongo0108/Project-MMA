import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Protected from "./protect/protectStack";
import ProtectedLogin from "./protect/protectLogin";
import {
  ProfileScreen,
  OrdersScreen,
  OrderTrackingScreen,
  AboutusScreen,
  ChangePassScreen,
  EditProfileScreen,
  HelpScreen,
  PolicyScreen,
  ContractScreen,
  ContractDetailScreen,
  LoginScreen,
  RegisterScreen,
  WalletScreen,
  RechargeScreen,
  TransactionDetailScreen
} from "../screens";
const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="Profile" options={{ headerShown: false }}>
        {() => <Protected Component={ProfileScreen} />}
      </Stack.Screen>
      <Stack.Screen
        name="About Us"
        component={AboutusScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Help & Contact Us"
        component={HelpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Privacy Policy"
        component={PolicyScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contract"
        component={ContractScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contract Detail"
        component={ContractDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="My Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recharge"
        component={RechargeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetailScreen}
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
      <Stack.Screen name="SignUp" options={{ headerShown: false }}>
        {() => <ProtectedLogin Component={RegisterScreen} />}
      </Stack.Screen>
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {() => <ProtectedLogin Component={LoginScreen} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default ProfileStack;
