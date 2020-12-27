import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";

const quiz = [
  {
    question: "hey this quesiton 1 ",
    answers: [
      ["answer1", false],
      ["answer2", false],
      ["answer3", true],
      ["answer4", false],
    ],
  },
  {
    question: "hey this quesiton 2 ",
    answers: [
      ["answer1", false],
      ["answer2", false],
      ["answer3", true],
      ["answer4", false],
    ],
  },
  {
    question: "hey this quesiton 3 ",
    answers: [
      ["answer1", false],
      ["answer2", false],
      ["answer3", true],
      ["answer4", false],
    ],
  },
];

export default () => {
  function handleSubmit() {
    console.log(quiz[0]);
  }
  const [correct, setCorrect] = useState(false);

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
                onPress={() => setCorrect(true)}
              >
                <Text
                  onPress={() => console.log(item[1], correct)}
                  style={styles.text}
                >
                  {item[0]}
                </Text>
              </Button>
              {correct ? <Text>Correct !!</Text> : null}
            </View>
          ))}
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
