import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={style.root}>
      <Text>THIS IS THE Student dashboard screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#aaa",
    color: "#333",
  },
});
