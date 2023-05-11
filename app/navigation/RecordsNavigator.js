import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Records from "../screens/Records/Records";
import SubRec_1 from "../screens/Records/SubRec_1";
import SubRec_2 from "../screens/Records/SubRec_2";
import SubRec_3 from "../screens/Records/SubRec_3";

const Stack = createStackNavigator();

function RecordsNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="rec" component={Records} />
      <Stack.Screen name="rec1" component={SubRec_1} />
      <Stack.Screen name="rec2" component={SubRec_2} />
      <Stack.Screen name="rec3" component={SubRec_3} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RecordsNavigator;
