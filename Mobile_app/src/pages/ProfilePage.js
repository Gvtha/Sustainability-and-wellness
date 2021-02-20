import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Platform } from "react-native";

import Screen from "../components/Screen";
import Button from "../components/Button";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/colors";

function ProfilePage(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.userImageContainer}>
        <MaterialCommunityIcons
          name="account-circle"
          color={color.medium}
          size={100}
        />
      </View>

      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>Jeevitha</Text>
      </View>

      <View style={styles.userDetailsContainer}>
        <View style={styles.userDetailTextContainer}>
          <Text style={styles.userDetailTextHeading}>Email: </Text>
          <Text style={styles.userDetailText}>jeevitha@gmail.com</Text>
        </View>
        <View style={styles.userDetailTextContainer}>
          <Text style={styles.userDetailTextHeading}>Age: </Text>
          <Text style={styles.userDetailText}>21</Text>
        </View>
        <View style={styles.userDetailTextContainer}>
          <Text style={styles.userDetailTextHeading}>Height: </Text>
          <Text style={styles.userDetailText}>152.4 cm </Text>
        </View>
        <View style={styles.userDetailTextContainer}>
          <Text style={styles.userDetailTextHeading}>Weight: </Text>
          <Text style={styles.userDetailText}>50 kg</Text>
        </View>
      </View>

      <Button title="Generate report" />
      <Button title="Logout" color="medium" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: color.light },
  userImageContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  userNameContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  userNameText: {
    color: color.dark,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  userDetailsContainer: {
    width: "90%",
    marginHorizontal: 20,
    backgroundColor: color.white,
    padding: 20,
    marginVertical: 30,
    elevation: 10,
    borderRadius: 5,
  },
  userDetailText: {
    color: color.black,
    fontSize: 18,
  },
  userDetailTextHeading: {
    color: color.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  userDetailTextContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
export default ProfilePage;
