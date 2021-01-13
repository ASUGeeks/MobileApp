import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";

const quiz = [
  {
    hash: "1",
    question: "hey this quesiton 1 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    hash: "2",
    question: "hey this quesiton 2 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    hash: "3",
    question: "hey this quesiton 3 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
];

export default () => {
  function handleSubmit(answers) {
    axios
      .post(
        "/student/submitquiz",
        { studentAnswer: answers },
        { token: localStorage.getItem(token) }
      )
      .then(() => console.log("sent"))
      .catch((e) => {
        console.log(e);
      });
  }
  const correctCheck = (answer, hash) => {
    setCorrect((oldArr) => [...oldArr, { [hash]: answer }]);
    console.log(correct);
  };

  const [correct, setCorrect] = useState([]);

  return (
    <ScrollView style={styles.root}>
      {console.log(correct)}
      <Text style={styles.header}>Quiz</Text>
      {quiz.map((Questions) => (
        <Surface style={styles.root}>
          <Text style={styles.text}>{Questions.question}</Text>

          {Questions.answers.map((Answer) => (
            <View style={styles.answers}>
              <Button
                mode="outlined"
                uppercase={false}
                onPress={() => correctCheck(Answer, Questions.hash)}
              >
                <Text style={styles.text}>{Answer}</Text>
              </Button>
            </View>
          ))}
        </Surface>
      ))}

      <Submit handleSubmit={handleSubmit(correct)} />
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
