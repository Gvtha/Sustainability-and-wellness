import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import color from "../config/colors";

function ChatPage(props) {
  return (
    <Screen style={styles.container}>
      <Text>this the chatbot page</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: color.light },
});
export default ChatPage;
