import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ChatPage from "../pages/ChatPage";
import ManualPage from "../pages/ManualPage";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    barStyle={{ backgroundColor: "#26A69A" }}
  >
    <Tab.Screen
      name="Monitor"
      component={HomePage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Form"
      component={ManualPage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="form-select" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="GBot"
      component={ChatPage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfilePage}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
