import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
export default () => {
  const [specifications, setspecifications] = useState("");
  const [Assignments, setAssignments] = useState([]);
  
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    // setAssignments("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.root}>
      <Input
        label="AssignmentTitle"
        value={specifications}
        setValue={setspecifications}
      />
      <Input
        label="Assignment Description"
        value={specifications}
        setValue={setspecifications}
        numberOfLines={5}
      />
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
