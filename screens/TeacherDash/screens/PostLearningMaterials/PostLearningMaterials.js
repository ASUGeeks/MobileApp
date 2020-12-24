import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
export default () => {
  const [Title, setTitle] = React.useState("");
  const [URL, setURL] = React.useState("");

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.root}>
      <Input label="Title" value={Title} setValue={setTitle} />
      <Input label="URL" value={URL} setValue={setURL} />
      <Submit handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
