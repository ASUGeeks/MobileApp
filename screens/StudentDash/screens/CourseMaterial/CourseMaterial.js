import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

export default ({ route }) => {
  const [Title, setTitle] = useState("");
  const { title, id } = route.params;
  console.log("THISI IS PROPS", route);
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <Text>{title}</Text>
      <Text>{id}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
