import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
export default () => {
  const [specifications, setspecifications] = useState("");
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    setspecifications("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.root}>
      <Input
        label="Course specification"
        value={specifications}
        setValue={setspecifications}
      />
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
