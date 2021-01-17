import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";
import axios from "axios";

import {
  adminToken,
  teacherToken,
  studentToken,
} from "../../../../Tokens/Tokens";
import Feedback from "../../../../shared/Feedback";
export default () => {
  const [name, setname] = useState("Mathematics");
  const [code, setcode] = useState("CSE219");
  const [credit_hours, setcredit_hours] = useState(3);
  const [avatarURL, setavatarURL] = useState(
   "https://ngegypt.net/wp-content/uploads/2020/12/Math-001.png"  );

  const [IsFail, setIsFail] = useState(null);

  useEffect(() => {}, []);

  function handleSubmit() {
    const course = {
      name,
      code,
      TAs: [],
      credit_hours,
      imgURL: avatarURL,
    };

    axios
      .post("http://192.168.1.6:5100/create-course", course, {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("login", r.data);
        setIsFail(false);
        // storeToken()
      })
      .catch((bug) => {
        setIsFail(true);
        console.log("BUBUBUUB", bug);
      });
  }

  return (
    <ScrollView style={styles.root}>
      <Input label="Course Name" value={name} setValue={setname} />
      <Input label="Course Code" value={code} setValue={setcode} />
      <Input label="avatarURL" value={avatarURL} setValue={setavatarURL} />
      <Input
        label="Credit hours"
        value={credit_hours}
        setValue={setcredit_hours}
      />
      <Submit handleSubmit={handleSubmit} />
      <Feedback
        IsFail={IsFail}
        sucess="A new course is created sucessfully"
        fail="An error occured"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
