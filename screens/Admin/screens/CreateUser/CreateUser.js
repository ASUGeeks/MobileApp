import React, { useState, useEffect } from "react";
import {  StyleSheet,ScrollView } from "react-native";
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
    console.log("Submit",admin);
  }

  return (
    <ScrollView style={styles.root}>
      <Input label="User Name" value={username} setValue={setusername} />
      <Input label="E-mail" value={email} setValue={setemail} />
      <Input label="Password" value={password} setValue={setpassword} />
      <Radio title="Roles" options={["Student", "Teacher"]} value={role} setValue={setrole} />
      <Submit handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
