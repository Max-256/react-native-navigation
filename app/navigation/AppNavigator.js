import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Records from "../screens/Records";
import Home from "../screens/Home";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Records" component={Records} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
