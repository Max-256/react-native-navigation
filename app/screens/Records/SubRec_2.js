import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

function SubRec_2({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <AntDesign color={colors.primary} name="leftcircleo" size={25} />
      </Pressable>
      <Text>Sub Record 2</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubRec_2;
