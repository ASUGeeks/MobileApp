import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {Text} from "react-native-paper"
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import { teacherToken } from "../../../../Tokens/Tokens";
import axios from "axios";

export default () => {
  const [Title, setTitle] = useState("Assignment 1");
  const [Details, setDetails] = useState(
    "some assignment so you hate me even more"
  );
  const [AdditionalLink, setAdditionalLink] = useState("mahmodHammad.github.io/me");
  const [Assignments, setAssignments] = useState([]);

  function createAss(ass) {
    const assignment = {
      course_code: "CSE202",
      assignment: {
        descreption: Details,
        url: AdditionalLink,
        deadline: new Date(),
        title: Title,
      },
    };

    axios
      .post("http://192.168.1.6:5100/create-assignment", assignment, {
        headers: { token: teacherToken },
      })
      .then((r) => {
        console.log("lololo", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
    createAss();
  }

  return (
    <View style={styles.root}>
      <Input label="AssignmentTitle" value={Title} setValue={setTitle} />
      <Input
        label="Assignment Description"
        value={Details}
        setValue={setDetails}
        numberOfLines={5}
      />
      <Text>{AdditionalLink}</Text>
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
