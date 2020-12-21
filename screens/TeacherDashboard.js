import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View>
      <Text style={styles.root}>THIS IS THE Teacher Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#ccc",
    color: "#933",
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: "#333",
    color: "#eee",
    margin: 10,
    padding: 10,
    borderRadius: 100,
  },
});
