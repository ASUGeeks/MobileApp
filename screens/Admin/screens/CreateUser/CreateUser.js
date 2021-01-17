import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import axios from "axios";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";
import Feedback from "../../../../shared/Feedback";

export default () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [IsFail, setIsFail] = useState(null);

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
      .post("http://localhost:5100/create-account", admin, {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E",
        },
      })
      .then((r) => {
        setIsFail(false);
        console.log("hey", r);
      })
      .catch((bug) => {
        setIsFail(true);
        console.log("BUBUBUUB", bug);
      });

    const teacherToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDg0YTRmM2E4OTAyOGQ5ZDdkOWI1IiwidXNlcm5hbWUiOiJzaW1wbyIsImVtYWlsIjoic2ltcG9AZ21haWwuY29tIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE2MTA0NTAxMzF9.S22l3BPgvRR-lwP4-tK_IjRHVbRSmwzjrrp_fFOcZow";

    console.log("Submit", admin);
  }

  return (
    <ScrollView style={styles.root}>
      <Input label="User Name" value={username} setValue={setusername} />
      <Input label="E-mail" value={email} setValue={setemail} />
      <Input label="Password" value={password} setValue={setpassword} />
      <Radio
        title="Roles"
        options={["student", "teacher"]}
        value={role}
        setValue={setrole}
      />
      <Submit handleSubmit={handleSubmit} />

      <View
        style={{
          fontSize: 22,
          color: "#00AB66",
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feedback
          IsFail={IsFail}
          sucess=" User is created sucessfully"
          fail="An error occured"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
