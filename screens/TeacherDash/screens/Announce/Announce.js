import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../../../shared/Input";
import Submit from "../../../../shared/Submit";

import axios from "axios";
import {
  adminToken,
  teacherToken,
  studentToken,
} from "../../../../Tokens/Tokens";

export default () => {
  const [Title, setTitle] = React.useState("something is going to happen");
  const [Body, setBody] = React.useState(
    "hold on to you hats, little pieces of human trash. You need to submit a very large project in two days, and I will take no excuses"
  );

  function handleSubmit() {
    const announce = {
      course_code: "CSE202",
      announcement: {
        title: Title,
        body: Body,
      },
    };

    // TODO
    // make an http post request here

    axios
      .post("http://192.168.1.6:5100/create-announcement", announce, {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("annonce pust", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  return (
    <View style={styles.root}>
      <Input label="Title" value={Title} setValue={setTitle} />
      <Input label="Body" numberOfLines={3} value={Body} setValue={setBody} />
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
