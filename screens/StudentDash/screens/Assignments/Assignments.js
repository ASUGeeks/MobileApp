import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import AssCard from "./components/AssCard";
// import { Button } from "react-native-paper";

export default ({ navigation }) => {
  const [Assignments, setAssignments] = useState([
    { title: "Ass1", subtitle: "THE first assignment", assID: "fahiowvoin" },
  ]);

  const showModal = () => setVisible(true);

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }
  function handleNavigate(assTitle, assId) {
    navigation.navigate("Assignment screen", { assId, assTitle });
  }
  return (
    <ScrollView style={styles.root}>
      {/* <Text>THIS is the assignments screen</Text> */}
      {Assignments.map((ass) => (
        <AssCard
          handleClick={handleNavigate}
          title={ass.title}
          subtitle={ass.subtitle}
          assID={ass.assID}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
