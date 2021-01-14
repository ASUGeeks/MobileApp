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


export default () => {
  const [name, setname] = useState("logic");
  const [code, setcode] = useState("CSE202");
  const [credit_hours, setcredit_hours] = useState(2);
  const [avatarURL, setavatarURL] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMFeuWcfwWDbZA4gAc-QtZf0989QM0YfoMA&usqp=CAU");


  useEffect(() => {
     }, []);

  function handleSubmit() {
    const course = {
      name,
      code,
      TAs: [],
      credit_hours,
      imgURL:avatarURL,
    };

    axios
      .post("http://192.168.1.6:5100/create-course", course, {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("login", r.data);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  return (
    <ScrollView style={styles.root}>
      <Input label="Course Name" value={name} setValue={setname} />
      <Input label="teacher" value={code} setValue={setcode} />
      <Input label="avatarURL" value={avatarURL} setValue={setavatarURL} />
      <Input
        label="avatarURL"
        value={credit_hours}
        setValue={setcredit_hours}
      />
      <Submit handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
