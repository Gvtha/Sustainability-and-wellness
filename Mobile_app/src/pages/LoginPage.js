import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import color from "../config/colors";

import Button from "../components/Button";

function LoginPage({ navigation }) {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = {
      emailAddress: emailId,
      password: password,
    };

    console.log(data);
    navigation.navigate("App");
  };

  return (
    <Screen style={styles.container}>
      <View>
        <Text style={styles.appNameText}>gfit</Text>
      </View>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Login</Text>
      </View>

      <View style={styles.credentialInputContainer}>
        <TextInput
          style={styles.credentialInput}
          placeholder="Email ID"
          onChangeText={(text) => setEmailId(text)}
        />
        <TextInput
          style={styles.credentialInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button title="Login" color="medium" onPress={onSubmit} />
      </View>
      <View style={styles.newAccountContainer}>
        <Text style={{ color: "white", fontWeight: "bold", marginRight: 5 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={{ color: "white", textDecorationLine: "underline" }}>
            Click here to create one
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    justifyContent: "center",
  },
  headingTextContainer: {
    alignSelf: "center",
    marginTop: 30,
  },
  headingText: {
    fontSize: 40,
    fontWeight: "bold",
    color: color.white,
  },
  appNameText: {
    fontSize: 65,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    color: color.white,
  },
  credentialInput: {
    textAlign: "center",
    backgroundColor: color.white,
    padding: 15,
    marginVertical: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  credentialInputContainer: {
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  newAccountContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
});
export default LoginPage;
