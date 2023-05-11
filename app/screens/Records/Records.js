import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function Records({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("rec3")}
        style={styles.all}
      >
        <Text>All time records</Text>
      </TouchableOpacity>
      <View style={styles.sub}>
        <TouchableOpacity
          onPress={() => navigation.navigate("rec1")}
          style={styles.subContainer}
        >
          <Text>Sub Records 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("rec2")}
          style={styles.subContainer}
        >
          <Text>Sub Records 2</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.all}>
        <Text>All time records duplicate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.all}>
        <Text>All time records duplicate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 7,
    elevation: 1,
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginVertical: 10,
  },
  container: {
    padding: 10,
  },
  sub: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  subContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 7,
    height: 120,
    justifyContent: "center",
    width: 140,
    elevation: 1,
  },
});

export default Records;
