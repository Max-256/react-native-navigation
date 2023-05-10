import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main Account Screen</Text>
      <View style={styles.buttons}>
        <Button
          title="Account 2"
          onPress={() => navigation.navigate("subAcc_2")}
        />
        <Button
          title="Account 3"
          onPress={() => navigation.navigate("subAcc_3")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
    width: "100%",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Account;
