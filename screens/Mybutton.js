import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default ({ title, navigation, destination, color }) => {
  if (color === undefined) {
    color = "#933";
  }
  
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color }]}
      onPress={() => navigation.navigate(destination)}
    >
      {title}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    color: "#eee",
    backgroundColor: "#933",
    margin: 10,
    padding: 10,
    borderRadius: 100,
  },
});
