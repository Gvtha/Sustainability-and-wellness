import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Screen from "../components/Screen";
import color from "../config/colors";

import Button from "../components/Button";

function SignUpPage({ navigation }) {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(null);

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const onSubmit = () => {
    const data = {
      name: name,
      emailAddress: emailId,
      password: password,
      age: age,
      height: height,
      weight: weight,
    };

    console.log(data);

    navigation.navigate("Login");
  };

  return (
    <Screen style={styles.container}>
      <View>
        <Text style={styles.appNameText}>gfit</Text>
      </View>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>

      <View style={styles.credentialInputContainer}>
        <TextInput
          style={styles.credentialInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
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
        <TextInput
          style={styles.credentialInput}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.credentialInput}
          placeholder="Height"
          onChangeText={(text) => setHeight(text)}
        />
        <TextInput
          style={styles.credentialInput}
          placeholder="Weight"
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View>
        <Button title="Sign Up" color="medium" onPress={onSubmit} />
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
    marginTop: 10,
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
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  credentialInputContainer: {
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
export default SignUpPage;
