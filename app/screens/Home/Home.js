import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

function Home({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.firstRow}>
        <TouchableOpacity
          style={styles.sub1}
          onPress={() => navigation.navigate("subHome1")}
        >
          <Text>Sub Home 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sub1}
          onPress={() => navigation.navigate("subHome2")}
        >
          <Text>Sub Home 2</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.statistics}>Business Statistics</Text>
      <TouchableOpacity
        style={styles.statisticsContainer}
        onPress={() => navigation.navigate("subHome3")}
      >
        <Text>Business Statistics</Text>
      </TouchableOpacity>
      <Text style={styles.statistics}>Latest Market News</Text>
      <TouchableOpacity
        style={styles.marketContainer}
        onPress={() => navigation.navigate("subHome4")}
      >
        <Text>Market prices</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marketContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 5,
    elevation: 2,
    height: 150,
    justifyContent: "center",
    width: "100%",
    marginBottom: 50,
  },
  sub1: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 1,
    height: 120,
    justifyContent: "center",
    width: 140,
  },
  statistics: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  statisticsContainer: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 5,
    elevation: 1,
    height: 150,
    justifyContent: "center",
    width: "100%",
  },
});

export default Home;
