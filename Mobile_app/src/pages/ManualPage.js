import React from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Screen from "../components/Screen";
import color from "../config/colors";

function ManualPage(props) {
  const onSubmit = () => {
    ToastAndroid.show("entry success", ToastAndroid.SHORT);
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.manualHeadingContainer}>
        <Text style={styles.manualHeadingText}>Enter your Health Vitals</Text>
      </View>

      <View style={styles.formContainer}>
        <InputField
          title="Body temperature"
          placeholder="Temperature in celcius"
        />
        <InputField title="Blood pressure" placeholder="Blood pressure" />
        <InputField title="Respiration" placeholder="Respiration rate" />
        <InputField title="Glucose" placeholder="Blood glucose level" />
        <InputField title="Heart beat" placeholder="Heart beat rate" />
        <InputField
          title="Oxygen Saturation"
          placeholder="Blood oxygen saturation level"
        />
        <InputField title="Cholestrol" placeholder="Blood cholestrol level" />
      </View>

      <View>
        <Button title="Submit" onPress={onSubmit} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: color.light },
  manualHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  manualHeadingContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  formContainer: {
    width: "90%",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
});
export default ManualPage;
