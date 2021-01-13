import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
// import { Button } from "react-native-paper";

export default (props) => {
  console.log("HEHEHEHE", props);
  const { params } = props.route;
  const AssignmentTitle = params.assTitle;
  const AssignmentID = params.assId;

  console.log("params", params);
  const [AssUri, setAssUri] = useState("");

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <Text>{AssignmentTitle}</Text>
      <Text>{AssignmentID}</Text>
      <Text>THis is the quizz screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
