import React from "react";
import { View, StyleSheet } from "react-native";

const Box = ({ color }) => {
  return <View style={[style.Box, { backgroundColor: color }]}></View>;
};

const style = StyleSheet.create({
  Box: {
    height: 50,
    width: 50,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity:0.2,
    shadowRadius:4,
    elevation:30,
  },
});

export default Box;
