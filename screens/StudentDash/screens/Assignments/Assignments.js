import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import AssCard from "./components/AssCard";
import { teacherToken } from "../../../../Tokens/Tokens";
// import { Button } from "react-native-paper";

export default ({ navigation }) => {
  const [Assignments, setAssignments] = useState([
    { title: "Ass1", subtitle: "THE first assignment", assID: "fahiowvoin" },
  ]);

  const showModal = () => setVisible(true);

  // app.get("/assignments/:courseID", [], get_assignments);

  // function createAss(ass) {
  //   const assignment = {
  //     course_code: "CSE202",
  //     assignment: {
  //       descreption: "some assignment so you hate me even more",
  //       url: "someurl.com",
  //       deadline: new Date(),
  //       title: "Assignment 1",
  //     },
  //   };
  const CourseID = "6000225c76ee492a515e0d8d";

  function getAllASSes() {
    axios
      .get(`http://192.168.1.6:5100/assignments/${CourseID}`, {
        headers: { token: teacherToken },
      })
      .then((r) => {
        console.log("lololo", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {
    getAllASSes();
  }, []);

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
