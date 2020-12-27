import React from "react";
import { View, StyleSheet} from "react-native";
import {Text} from "react-native-paper"
import Input from "../../shared/Input";
import Submit from "../../shared/Submit";
import InputMask from "./components/InputMask"
export default () => {
  const [Title, setTitle] = React.useState("");
  const [Body, setBody] = React.useState("");

  function handleSubmit() {
    const announcement = {
      Title,
      Body,
    };
    // TODO
    // make an http post request here
    console.log("HEEEEEEH , this is the announcet LOL", announcement);
  }

  return (
    <View style={styles.root}>
      <Text>Login </Text>
      <Input
        label="UserName"
        secureTextEntry={true}
        value={Title}
        setValue={setTitle}
        Masker= {InputMask}
      />
      <Input
        label="Password"
        value={Body}
        setValue={setBody}
        Masker={ InputMask}
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
