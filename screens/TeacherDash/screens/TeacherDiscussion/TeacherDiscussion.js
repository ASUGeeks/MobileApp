import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Input from "../../../../shared/Input";
import Submit from "../../../../shared/Submit";
export default () => {
  const [Title, setTitle] = React.useState("");
  const [Body, setBody] = React.useState("");

  function createForum() {
    const forum = {
      Title
    };
    // TODO 
    // make an http post request here
    console.log("HEEEEEEH , this is the announcet LOL", forum);
  }

  return (
    <View style={styles.root}>
      <Input label="Topic of discussion" value={Title} setValue={setTitle} />
     
      <Button style={styles.root} mode="contained" onPress={createForum}>
        Create forum
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
