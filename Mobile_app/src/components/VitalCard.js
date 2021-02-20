import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function VitalCard({ title, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.vitalHeadingText}>{title}</Text>
      <View style={styles.vitalValueContainer}>
        <Text style={styles.vitalValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 200,
    height: 200,
    borderRadius: 5,
    elevation: 10,
    marginLeft: 20,
    padding: 20,
  },
  vitalHeadingText: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.medium,
  },
  vitalValue: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.secondary,
  },
  vitalValueContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default VitalCard;
