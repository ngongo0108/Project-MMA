
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from './src/screens';
import EditProfile from './src/screens/Profile/EditProfile';
import Settings from './src/screens/Profile/Settings';
import Help from './src/screens/Profile/Help';
import Policy from './src/screens/Profile/Policy';
import Aboutus from './src/screens/Profile/Aboutus';
import ChangePass from "./src/screens/Profile/ChangePass";
import MyWallet from "./src/screens/Profile/MyWallet";
import Orders from "./src/screens/Profile/Orders";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigatior = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigatior}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <FontAwesome name={"home"} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigatior = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Privacy Policy" component={Policy} />
      <Stack.Screen name="About Us" component={Aboutus} />
      <Stack.Screen name="Help & Contact Us" component={Help} />
      <Stack.Screen name="Change Password" component={ChangePass} />
      <Stack.Screen name="My Wallet" component={MyWallet} />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <TabNavigatior />
      </NavigationContainer>
  );
};
export default App;
