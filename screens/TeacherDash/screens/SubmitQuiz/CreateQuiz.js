import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, Button, TextInput, Surface } from "react-native-paper";
import QuizComponent from "./QuizComponent/QuizComponent";

export default () => {
  const [form, updateForm] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [answers, setAnswers] = useState([]);

  const putAnswerFn = () => {
    let arr = [...answerText];
    arr.push(answerText);
    setAnswers(arr);
    console.log(answerText);
    console.log(answers);
  };
  return (
    <ScrollView style={styles.root}>
      <Surface style={styles.root}>
        <TextInput
          label="type a question"
          type="outlined"
          value={questionText}
          onChangeText={(text) => setQuestionText(text)}
          style={styles.text}
        />
        <TextInput
          label="type an answer"
          type="outlined"
          value={answerText}
          onChangeText={(text) => setAnswerText(text)}
          style={styles.text}
        />

        {answers.map((Answer) => {
          <View style={styles.answers}>
            <Button
              mode="outlined"
              uppercase={false}
              onPress={() => correctCheck(Answer, Questions.hash)}
            >
              <Text style={styles.text}>{Answer}</Text>
            </Button>
          </View>;
        })}
        <Button
          type="text"
          mode="text"
          onPress={() => {
            putAnswerFn();
          }}
        >
          Add Answers
        </Button>
      </Surface>
      <Button
        type="text"
        mode="text"
        onPress={() => {
          updateForm((oldArray) => [...oldArray, QuizComponent]);
        }}
      >
        Add Question
      </Button>
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
