import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import AppNavigator from "./AppNavigator";

const Tab = createStackNavigator();

const AuthNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Login"
      component={LoginPage}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Sign Up"
      component={SignUpPage}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="App"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default AuthNavigator;
