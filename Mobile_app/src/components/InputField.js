import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import colors from "../config/colors";

function InputField({
  title,
  placeholder,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View style={[styles.container]}>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textInput: {
    backgroundColor: colors.light,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
});
export default InputField;
