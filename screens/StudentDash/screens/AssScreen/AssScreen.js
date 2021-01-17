import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import { studentToken } from "../../../../Tokens/Tokens";
// import { Button } from "react-native-paper";

export default (props) => {
  console.log("HEHEHEHE", props);
  const { params } = props.route;
  const AssignmentTitle = params.assTitle;
  const AssignmentID = params.assId;

  console.log("params", params);
  const [url, seturl] = useState("");

  const ASSID = "6000390d0ef0af2eb7552634";

  function SubmitASS() {
    axios
      .post(
        `http://192.168.1.6:5100/submit-assignment/${ASSID}`,
        { url },
        {
          headers: { token: studentToken },
        }
      )
      .then((r) => {
        console.log("lololo", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {}, []);

  function handleSubmit() {
    SubmitASS();
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <Text>{AssignmentTitle}</Text>
      <Text>{AssignmentID}</Text>
      <Input label="Assignment URI" value={url} setValue={seturl} />
      <Submit handleSubmit={handleSubmit} label="submit Assignment" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
