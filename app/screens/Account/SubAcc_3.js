import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

function SubAcc_3({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <AntDesign color={colors.primary} name="leftcircleo" size={25} />
      </Pressable>
      <Text> Sub Account screen 3 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    left: 15,
    position: "absolute",
    top: 25,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default SubAcc_3;
