import React,{useState} from "react";
import axios from "axios"
import { View, StyleSheet} from "react-native";
import {Text} from "react-native-paper"
import Input from "../../../../shared/Input";
import Submit from "../../../../shared/Submit";
import {SecureStore} from 'expo';

export default () => {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");

 async function storeToken(item){
  await SecureStore.setItemAsync('secure_token','sahdkfjaskdflas$%^&');
const token = await SecureStore.getItemAsync('secure_token');
console.log(token); // output: sahdkfjaskdflas$%^&
  }



  function handleSubmit() {
    const LoginParams = {
        username:Title,
        password:Body,
    };
    axios
    .post("http://localhost:5100/login",LoginParams)
    .then((r) => {
        console.log("login",r.data.token)
        // storeToken()
    })
    .catch((bug) => console.log("BUBUBUUB", bug))
  }

  return (
    <View style={styles.root}>
      <Text>Login </Text>
      <Input
        label="UserName"
        secureTextEntry={true}
        value={Title}
        setValue={setTitle}
      />
      <Input
        label="Password"
        value={Body}
        setValue={setBody}
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
