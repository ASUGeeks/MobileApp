import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import AssCard from "./components/AssCard";
// import { Button } from "react-native-paper";

export default ({ navigation }) => {
  const [Title, setTitle] = useState("");

  const showModal = () => setVisible(true);

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }
  function handleNavigate() {
    navigation.navigate("Assignment screen");
  }
  return (
    <ScrollView style={styles.root}>
      {/* <Text>THIS is the assignments screen</Text> */}
      <AssCard
        handleClick={handleNavigate}
        title="Ass 1"
        subtitle="On compinational circuits"
      />
      <AssCard
        handleClick={handleNavigate}
        title="Ass 2"
        subtitle="On compinational circuits"
      />
      <AssCard
        handleClick={handleNavigate}
        title="Ass 3"
        subtitle="On compinational circuits"
      />
      <AssCard
        handleClick={handleNavigate}
        title="Ass 4"
        subtitle="On compinational circuits"
      />
      <AssCard
        handleClick={handleNavigate}
        title="Ass 5"
        subtitle="On compinational circuits"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
