import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import QuizzCard from "./components/QuizzCard";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
// import { Button } from "react-native-paper";

export default ({ title, subtitle, handleClick, assID, navigation }) => {
  const [Title, setTitle] = useState("");

  const showModal = () => setVisible(true);

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <Text>THIS is the Quizzes screen</Text>

      <QuizzCard title="Quiz 1" subtitle="hello world" quizzId="23456" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
