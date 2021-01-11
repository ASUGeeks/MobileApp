import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, Button, Surface } from "react-native-paper";
import QuizComponent from "./QuizComponent/QuizComponent";
import Input from "../../../../shared/Input";

export default () => {
  const [form, updateForm] = useState([]);

  const addQuestion = () => {
    const temp = {
      hash: "",
      quesiton: "",
      answers: ["a", "", "", ""],
    };
    updateForm((oldArr) => [...oldArr, temp]);
  };

  const handleQuestionText = (lable, text, index) => {
    const oldContent = [...form];
    oldContent[index].question = text;
    updateForm(oldContent);
  };

  return (
    <ScrollView style={styles.root}>
      <Surface style={styles.root}>
        <FlatList
          data={form}
          renderItem={({ item, index }) => (
            <View>
              {console.log(item)}
              <Input
                label="type a question"
                value={item.questionTitle}
                setValue={handleQuestionText}
                style={styles.text}
                index={index}
              />
              {item.answers.map((item) => (
                <Button mode="outlined" uppercase={false}>
                  <Text style={styles.text}>{item}</Text>
                </Button>
              ))}
            </View>
          )}
        />

        <Button
          type="text"
          mode="text"
          onPress={() => {
            addQuestion();
            console.log(form);
          }}
        >
          Add Question
        </Button>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  text: {
    margin: 20,
  },
  answers: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    margin: 5,
  },
  header: {
    margin: "auto",
    fontSize: "2em",
  },
});
