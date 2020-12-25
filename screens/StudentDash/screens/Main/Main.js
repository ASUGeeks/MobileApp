import React, { useState, useEffect } from "react";
import { View, StyleSheet,ScrollView  } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";

import SubjectCard from "./components/SubjectCard";


export default () => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Assignments, setAssignments] = useState([]);

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView  style={styles.root}>
      <SubjectCard title="Mathematics" subtitle="3rd primary"/>
      <SubjectCard title="Science" subtitle="3rd primary"/>
      <SubjectCard title="Arabic" subtitle="3rd primary"/>
      <SubjectCard title="English" subtitle="3rd primary"/>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
