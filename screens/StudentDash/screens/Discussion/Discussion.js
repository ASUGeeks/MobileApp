import React, { useState, useEffect } from "react";
import { Text, Button} from "react-native-paper";
import { View, StyleSheet, TextInput } from "react-native";
//import { grey100 } from "react-native-paper/lib/typescript/styles/colors";
//import { TextInput } from "react-native-gesture-handler";
const MyComponent = ({ route }) => {
  const [uri, seturi] = useState("Write a replay");

  useEffect(() => {}, []);

  function handleSubmit() {
    const addComment = {uri};
    // TODO 
    // make an http post request here
    console.log("HEEEEEEH , this is the Student dis LOL", addComment);
  }

  return (
    <View style={styles.root}>
      <View style={styles.styleOfViewOfText}>
      <Text style={styles.text}>THis is the discussion forum</Text>
      <Text style={styles.text}>hgghfhgfhfghfghf</Text>
      <Text style={styles.text}>hgghfhgfhfghfghf</Text>
      </View>
      <View style={styles.styleOfViewOfTextBox}>
        <View style={{flex:7}}>
          <TextInput style={styles.styleOfTextBox} clearTextOnFocus={true} onChangeText={text => seturi(text)}
          value={uri}></TextInput>
          </View>
        <View style={{flex:1}}>
          <Button style={{marginLeft: 5, marginTop: 2}} onPress={handleSubmit} mode="contained"> Send </Button>
        </View>
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    //alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    //backgroundColor: "blue",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  styleOfViewOfText: {
    flex: 5,
    //justifyContent: "flex-start",
    //alignSelf: "center",
  },
  styleOfTextBox: {
    color: "#595c5b",
    backgroundColor: "#e3e8e7",
    padding: 5,
    fontSize: 20,
    borderRadius: 3,
    //justifyContent: "flex-end",
  },
  styleOfViewOfTextBox: {
    //justifyContent: "center",
    //alignItems: "flex-end",
    //flex: 95,
    //flexWrap: "wrap"
    flexDirection: "row",
  },
});
