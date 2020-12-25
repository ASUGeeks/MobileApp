import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";

import SubjectCard from "./components/SubjectCard";

export default ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Assignments, setAssignments] = useState([]);

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);
  function handleNavigation(name, id) {
    navigation.navigate("CourseMaterial", {
      name,
      id,
    });
  }
  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <SubjectCard
        title="Mathematics"
        subtitle="3rd primary"
        imgURL="https://media.time4learning.com/uploads/help-your-kids-with-math-featured.png"
        handleNavigation={handleNavigation}
      />
      <SubjectCard
        title="Science"
        subtitle="3rd primary"
        imgURL="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499326.jpg?size=626&ext=jpg&ga=GA1.2.165327775.1595894400"
        handleNavigation={handleNavigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
