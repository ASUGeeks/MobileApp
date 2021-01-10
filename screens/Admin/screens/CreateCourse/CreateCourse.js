import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";

export default () => {
  const [coursename, setcoursename] = useState("");
  const [teacher, setteacher] = useState("");
  const [role, setrole] = useState("");
  const [avatarURL, setavatarURL] = useState("");

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    // setspecifications("hello, this is the course specification");fbsszm.k;likil;ki8k.    ERE´FJFIF
  }, []);

  function handleSubmit() {}

  return (
    <ScrollView style={styles.root}>
      <Input label="Course Name" value={coursename} setValue={setcoursename} />
      <Input label="teacher" value={teacher} setValue={setteacher} />
      <Input label="avatarURL" value={avatarURL} setValue={setavatarURL} />
      <Submit handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
