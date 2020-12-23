import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "./components/Input";
import Submit from "./components/Submit";
export default () => {
  const [Title, setTitle] = React.useState("");
  const [Body, setBody] = React.useState("");

  function handleSubmit() {
    const announcement = {
      Title,
      Body,
    };
    console.log("HEEEEEEH , this is the announcet LOL", announcement);
  }

  return (
    <View style={styles.root}>
      <Input label="Title" value={Title} setValue={setTitle} />
      <Input label="Body" numberOfLines={3} value={Body} setValue={setBody} />
      <Submit handleSubmit={handleSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
