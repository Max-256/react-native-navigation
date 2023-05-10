import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account/Account";
import SubAcc_2 from "../screens/Account/SubAcc_2";
import SubAcc_3 from "../screens/Account/SubAcc_3";

const Stack = createStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, presentation: "modal" }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="subAcc_2"
        component={SubAcc_2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="subAcc_3"
        component={SubAcc_3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountNavigator;
