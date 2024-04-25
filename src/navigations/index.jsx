import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Stacks

import {
  HomeStack,
  AppointmentStack,
  CartStack,
  ProfileStack,
} from "../stacks";
import LoginScreen from "../screens/Login";
import { CartScreen, RegisterScreen } from "../screens";
import VoucherScreen from "../screens/Voucher";
//Screen names
const homeName = "HomeStack";
const appointmentName = "AppointmentStack";
const cartName = "CartStack";
const profileName = "ProfileStack";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={profileName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === appointmentName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === cartName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === profileName) {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={appointmentName}
        component={AppointmentStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={cartName}
        component={CartStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
