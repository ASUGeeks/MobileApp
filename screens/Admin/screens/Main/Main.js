import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import IMG from "./I.png";
import axios from "axios";
export default ({ navigation }) => {
  axios
    .post("http://192.168.1.6:5100/login", {
      username: "adminadmin",
      password: "adminadmin",
    })
    .then((r) => console.log("hey", r))
    .catch((bug) => console.log("BUBUBUUB", bug));
  // axios.get("/").then(f=>console.log("HEEEY",f))
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri: "https://i.imgur.com/wBAxXZB.png",
        }}
      />
      {/* <Text
        style={{
          fontSize: 30,
          marginHorizontal: 20,
          marginBottom: 60,
          borderColor: "#333",
          borderBottomWidth: 2,
          borderStyle: "solid",
        }}
      >
        Learning is more than easy...
      </Text> */}
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Create user")}
      >
        Create User
      </Button>

      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Create course")}
      >
        Create course
      </Button>
      {/* <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("login2")}
      >
        Login
      </Button> */}
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("accept user")}
      >
        accept user
      </Button>
      {/* <Button
        style={styles.Button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        add student’s grades
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#ccc",
    color: "#933",
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: "#333",
    color: "#eee",
    margin: 10,
    padding: 10,
    borderRadius: 100,
  },
  Button: {
    marginVertical: 10,
    marginHorizontal: 50,
    width: 300,
  },
});
