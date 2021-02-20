import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function DiseaseCard({ title, description, status }) {
  return (
    <View style={styles.container}>
      <View style={styles.diseaseTitleContainer}>
        <Text style={styles.diseaseTitle}>{title}</Text>
        <Text style={{ fontSize: 12 }}>{description}</Text>
      </View>
      <View style={styles.statusTextContainer}>
        <Text
          style={[
            styles.statusText,
            {
              color: status ? colors.danger : colors.success,
              fontSize: 18,
              fontWeight: "bold",
            },
          ]}
        >
          {status ? "Positive" : "Negative"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    height: 120,
    marginHorizontal: 20,
    backgroundColor: "white",
    marginBottom: 5,
    elevation: 1,
  },
  diseaseTitleContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 5,
  },
  statusTextContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  diseaseTitle: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
export default DiseaseCard;
