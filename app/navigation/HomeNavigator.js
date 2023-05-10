import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import SubHome_1 from "../screens/Home/SubHome_1";
import SubHome_2 from "../screens/Home/SubHome_2";
import SubHome_3 from "../screens/Home/SubHome_3";
import SubHome_4 from "../screens/Home/SubHome_4";

const Stack = createStackNavigator();

function HomeNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="subHome1" component={SubHome_1} />
      <Stack.Screen name="subHome2" component={SubHome_2} />
      <Stack.Screen name="subHome3" component={SubHome_3} />
      <Stack.Screen name="subHome4" component={SubHome_4} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeNavigator;
