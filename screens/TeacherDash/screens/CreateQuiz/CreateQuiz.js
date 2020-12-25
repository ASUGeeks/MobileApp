import React, { useState, useEffect } from "react";
import { View,  StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Submit from "../../../../shared/Submit";

export default () => {
 
  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.root}>
      <Text>This is the quiz screen</Text>
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
