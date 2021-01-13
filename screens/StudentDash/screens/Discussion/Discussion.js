import React, { useState, useEffect } from "react";
import { Text, Button, Surface, TextInput } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Input from "../../../../shared/Input";
const MyComponent = ({ route }) => {
  const [uri, seturi] = useState();

  const [form, setForm] = useState([
    {
      body: "This is first discussion",
      replies: ["first reply", "second reply"],
    },
    {
      body: "This is 2nd discussion",
      replies: ["first reply", "second reply"],
    },
    {
      body: "This is 3rd discussion",
      replies: ["first reply", "second reply"],
    },
  ]);

  function handleSubmit() {
    const addComment = { uri };
    // TODO
    // make an http post request here
    console.log("HEEEEEEH , this is the Student dis LOL", addComment);
  }

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <FlatList
        data={form}
        extraData={form}
        renderItem={({ item }) => (
          <Surface style={styles.surface}>
            <View style={styles.content}>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
            <FlatList
              data={item.replies}
              renderItem={({ item }) => (
                <Surface style={styles.reply}>
                  <Text style={styles.text}>{item}</Text>
                </Surface>
              )}
            />
            <View style={styles.styleOfViewOfTextBox}>
              <View>
                <TextInput
                  style={styles.styleOfTextBox}
                  clearTextOnFocus={true}
                  setValue={seturi}
                  value={uri}
                  label="Write a reply"
                ></TextInput>
              </View>
              <View>
                <Button
                  style={{
                    marginLeft: 5,
                    marginTop: 2,
                    height: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={handleSubmit}
                  mode="outlined"
                >
                  Send
                </Button>
              </View>
            </View>
          </Surface>
        )}
      />

      <View style={styles.styleOfViewOfTextBox}>
        <View>
          <TextInput
            style={{ height: "20px !important" }}
            clearTextOnFocus={true}
            setValue={seturi}
            value={uri}
            label="Ask a Question"
          ></TextInput>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            style={{
              marginLeft: 5,
              marginTop: 2,
              height: 28,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleSubmit}
            mode="contained"
          >
            Send
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  surface: {
    marginBottom: 10,
    borderRadius: 15,
  },
  content: {
    margin: 10,
  },
  reply: {
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: "#393e46",
  },
  bodyText: { fontSize: 20 },
  text: {
    padding: 10,
    fontSize: 10,
  },

  styleOfTextBox: {
    height: 28,

    borderRadius: 5,
    justifyContent: "flex-end",
  },
  styleOfViewOfTextBox: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
