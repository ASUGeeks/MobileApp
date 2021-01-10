import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio"
const admin = {
    username: "username",
    email: "email@exmaple.com",
    role: "teacher",
    password: "somepassword",
  };
  
export default () => {
  const [userName, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    // setspecifications("hello, this is the course specification");fbsszm.k;likil;ki8k.    ERE´FJFIF
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.root}>
      <Input
        label="User Name"
        value={userName}
        setValue={setuserName}
      /><Input
      label="E-mail"
      value={Email}
      setValue={setEmail}
    /><Input
    label="Role"
    value={Role}
    setValue={setRole}
  /><Input
  label="Password"
  value={password}
  setValue={setpassword}
/>
<Radio options={["Student","Teacher"]} value={Role} setValue={setRole}/>
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
