import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import { teacherToken } from "../../../../Tokens/Tokens";
import axios from "axios";
import ASScard from "../../../StudentDash/screens/Assignments/components/AssCard";

export default ({navigation}) => {

  function GetSbmissions(ASSID = "6000390d0ef0af2eb7552634") {
    axios
      .get(`http://192.168.1.6:5100/submissions/${ASSID}`, {
        headers: { token: teacherToken },
      })
      .then((r) => {
        console.log("all submissions", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
    GetSbmissions();
  }, []);

  function handleSubmit() {
    console.log("Submit");
    createAss();
  }

  return (
    <View style={styles.root}>
      <ASScard
        title="Mahmoud Mohamed"
        subtitle="The first ASS"
        handleClick={()=>navigation.navigate("Grade Assignment",{assID:"ASS ID"})}
        assID="fwjaiofhwo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
