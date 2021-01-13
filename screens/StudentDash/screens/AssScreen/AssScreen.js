import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
// import { Button } from "react-native-paper";

export default ({ }) => {
  const [Title, setTitle] = useState("");

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root} >
      <Text>THIS is the assignments screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
