import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function HomeButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name="home" color={colors.white} size={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 7,
    bottom: 20,
    height: 70,
    justifyContent: "center",
    borderRadius: 50,
    width: 70,
  },
});

export default HomeButton;
