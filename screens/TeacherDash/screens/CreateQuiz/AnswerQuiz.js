import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";

const quiz = [
  {
    question: "hey this quesiton 1 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    question: "hey this quesiton 2 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    question: "hey this quesiton 3 ",
    answers: ["answer1", "answer2", "answer3", "answer4"],
  },
];

export default () => {
  function handleSubmit() {
    axios
      .post("/url", { studentAnswer: item })
      .then(() => console.log("sent"))
      .catch((e) => {
        console.log(e);
      });
  }
  const correctCheck = (item) => {
    setCorrect((oldArr) => [...oldArr, item]);
  };

  const [correct, setCorrect] = useState([]);

  return (
    <ScrollView style={styles.root}>
      {console.log(correct)}
      <Text style={styles.header}>Quiz</Text>
      {quiz.map((item) => (
        <Surface style={styles.root}>
          <Text style={styles.text}>{item.question}</Text>

          {item.answers.map((item) => (
            <View style={styles.answers}>
              <Button
                mode="outlined"
                uppercase={false}
                onPress={() => correctCheck(item)}
              >
                <Text style={styles.text}>{item}</Text>
              </Button>
            </View>
          ))}
          {correct ? <Text>Correct !!</Text> : null}
        </Surface>
      ))}

      <Submit handleSubmit={handleSubmit} />
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
