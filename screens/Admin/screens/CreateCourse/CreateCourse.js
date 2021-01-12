import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";
import axios from "axios"

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

  function handleSubmit() {
    
    const course={
      name:"computer organization",
      code:"CSE2020",
      profs:["simpo"],
      TAs:[],
      credit_hours:3,
    }
    const adminToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E"
    axios
    .post("http://localhost:5100/create-course",course,{headers:
    {token:adminToken}})
    .then((r) => {
        console.log("login",r.data)
        // storeToken()
    })
    .catch((bug) => console.log("BUBUBUUB", bug))
  }


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
