import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Records from "../screens/Records/Records";
import HomeNavigator from "./HomeNavigator";
import AccountNavigator from "./AccountNavigator";
import HomeButton from "../components/HomeButton";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator initialRouteName="Hello, Good day!">
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="equalizer"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hello, Good day!"
        component={HomeNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <HomeButton
              onPress={() => navigation.navigate("Hello, Good day!")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="My Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
