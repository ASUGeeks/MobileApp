import React, { useState, useEffect } from "react";
import { Text, Button, Surface, TextInput } from "react-native-paper";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const MyComponent = ({ route }) => {
  const [uri, seturi] = useState();
  const [questionIndex, setQuestionIndex] = useState(false);
  const [form, setForm] = useState([
    {
      owner: "simbo",
      body: "This is first discussion",
      replies: [
        { user: "hesham", reply: "first reply" },
        { user: "hmmad", reply: "second reply" },
      ],
    },
    {
      owner: "hesham",
      body: "This is 2nd discussion",
      replies: [
        { user: "hesham", reply: "first reply" },
        { user: "hmmad", reply: "second reply" },
      ],
    },
    {
      owner: "ghandr",
      body: "This is 3rd discussion",
      replies: [
        { user: "hesham", reply: "first reply" },
        { user: "hmmad", reply: "second reply" },
      ],
    },
  ]);

  function handleSubmit() {
    console.log(questionIndex, uri);
    let oldContent = [...form];
    if (questionIndex === "question" && uri !== undefined) {
      oldContent = [...oldContent, { owner: "test", body: uri }];
    } else {
      if (questionIndex === false || uri === undefined) {
        console.log("Nothing");
        return false;
      }
      if (oldContent[questionIndex].replies == undefined) {
        console.log(form);
        oldContent[questionIndex].replies = [];
        console.log(form);
      }
      oldContent[questionIndex].replies.push({ user: "test", reply: uri });
    }

    setForm(oldContent);
  }

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => {
          setQuestionIndex("question");
        }}
      >
        <Surface style={styles.surfaceQuestion}>
          <View style={styles.content}>
            <Text style={styles.bodyText}>Ask a Question</Text>
          </View>
        </Surface>
      </TouchableOpacity>
      <FlatList
        data={form}
        extraData={form}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => {
              setQuestionIndex(index);
            }}
          >
            <Surface style={styles.surface}>
              <View style={styles.content}>
                <Text style={styles.titleText}>Question {index + 1} : </Text>
                <View style={styles.avatar}>
                  <View style={{ width: 40 }}>
                    <Button style={styles.icon} icon="account" />
                  </View>
                  <Text style={{ fontSize: 15 }}>{item.owner} : </Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              </View>
              <FlatList
                data={item.replies}
                renderItem={({ item }) => (
                  <View>
                    <Surface style={styles.reply}>
                      <View style={styles.avatar}>
                        <View style={{ width: 40 }}>
                          <Button style={styles.icon} icon="account"></Button>
                        </View>
                        <Text style={{ fontSize: 15 }}>{item.user} : </Text>
                        <Text style={styles.bodyText}>{item.reply}</Text>
                      </View>
                    </Surface>
                  </View>
                )}
              />
            </Surface>
          </TouchableOpacity>
        )}
      />

      <View style={styles.styleOfViewOfTextBox}>
        <View style={{ flex: 7 }}>
          <TextInput
            style={{ height: "20px !important" }}
            clearTextOnFocus={true}
            onChangeText={(text) => seturi(text)}
            value={uri}
            label="Ask a Question"
          ></TextInput>
        </View>
        <View style={{ flex: 1, width: 5}}>
          <Button
            style={{ 
              marginLeft: 10,
              marginTop: 2,
              marginRight: 15,
              paddingTop: 1,
              paddingBottom: 1,
              paddingLeft: 20,
              height: 28,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleSubmit}
            mode="contained"
            icon="send"
          >
            
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
  titleText: {
    fontSize: 20,
    margin: 5,
  },
  avatar: {
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    width: 10,
  },
  surfaceQuestion: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
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
    backgroundColor: "#a2a5a8",
  },
  bodyText: { 
    fontSize: 15, 
    // margin: 5, 
    // paddingLeft: 20 
    marginLeft: 4,
  },
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
