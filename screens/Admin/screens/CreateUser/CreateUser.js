import React, { useState, useEffect } from "react";
import {  StyleSheet,ScrollView } from "react-native";
import axios from "axios"
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio"; 

export default () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    // setspecifications("hello, this is the course specification");fbsszm.k;likil;ki8k.    ERE´FJFIF
  }, []);

  function handleSubmit() {

    const admin = {
      username,
      email,
      role,
      password,
    };

  axios
  .post("http://localhost:5100/create-account",admin,{headers:
   {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E"}
  })
  .then((r) => console.log("hey", r))
  .catch((bug) => console.log("BUBUBUUB", bug))


  const teacherToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDg0YTRmM2E4OTAyOGQ5ZDdkOWI1IiwidXNlcm5hbWUiOiJzaW1wbyIsImVtYWlsIjoic2ltcG9AZ21haWwuY29tIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE2MTA0NTAxMzF9.S22l3BPgvRR-lwP4-tK_IjRHVbRSmwzjrrp_fFOcZow"  


    console.log("Submit",admin);
  }

  return (
    <ScrollView style={styles.root}>
      <Input label="User Name" value={username} setValue={setusername} />
      <Input label="E-mail" value={email} setValue={setemail} />
      <Input label="Password" value={password} setValue={setpassword} />
      <Radio title="Roles" options={["student", "teacher"]} value={role} setValue={setrole} />
      <Submit handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
