import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import { teacherToken } from "../../../../Tokens/Tokens";
import axios from "axios";

export default () => {
  const [Grade, setGrade] = useState(0);

  function submitGrade(submission_id = "60003dcf0ef0af2eb7552637") {
    axios
      .post(
        `http://192.168.1.6:5100/grade-submission`,
        { grade: Grade, submission_id },
        {
          headers: { token: teacherToken },
        }
      )
      .then((r) => {
        console.log("gradding", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {}, []);

  return (
    <View style={styles.root}>
      <Text>this is the grading screen</Text>
      <Input value={Grade} setValue={setGrade} label="The grade" />
      <Submit handleSubmit={() => submitGrade()} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
