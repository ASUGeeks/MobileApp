import React, { useState, useEffect } from "react";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";

export default (props) => {
  const [quiz, setquiz] = useState([
    {
      hash: "1",
      question: "hey this quesiton 1 ",
      valid_answers: ["answer1", "answer2", "answer3", "answer4"],
      answer: null,
    },
    {
      hash: "2",
      question: "hey this quesiton 2 ",
      valid_answers: ["answer1", "answer2", "answer3", "answer4"],
      answer: null,
    },
    {
      hash: "3",
      question: "hey this quesiton 3 ",
      valid_answers: ["answer1", "answer2", "answer3", "answer4"],
      answer: null,
    },
  ]);

  const { params } = props.route;
  const AssignmentTitle = params.assTitle;
  const AssignmentID = params.assId;

  function handleSubmit(answers) {
    console.log("ANSOWSFAF", quiz);
    // axios
    //   .post(
    //     "/student/submitquiz",
    //     { studentAnswer: answers },
    //     { token: localStorage.getItem(token) }
    //   )
    //   .then(() => console.log("sent"))
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }
  const correctCheck = (answer, hash, QuistionIndx, AnswerIndex) => {
    const oldquiz = [...quiz];
    oldquiz[QuistionIndx].answer = AnswerIndex;

    setquiz(oldquiz);
 
    // const newAnswer = setCorrect((oldArr) => [oldcorrect, { [hash]: answer }]);
  };

  return (
    <ScrollView style={styles.root}>
      <Text>{AssignmentTitle}</Text>
      <Text>{AssignmentID}</Text>

      <Text style={styles.header}>Quiz</Text>
      {console.log("QUIZ", quiz)}
      {quiz.map((Questions, QuistionIndx) => (
        <Surface style={styles.root}>
          <Text style={styles.text}>{Questions.question}</Text>

          {Questions.valid_answers.map((Answer, AnswerIndex) => (
            <View style={[styles.answers]}>
              <Button
              style={Questions.answer===AnswerIndex?styles.active:""}
                mode="outlined"
                uppercase={false}
                onPress={() =>
                  correctCheck(
                    Answer,
                    Questions.hash,
                    QuistionIndx,
                    AnswerIndex
                  )
                }
              >
                <Text style={styles.text}>{Answer}</Text>
              </Button>
            </View>
          ))}
        </Surface>
      ))}

      <Submit handleSubmit={ handleSubmit} />
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
    margin: 10,
    fontSize: 22,
  },
  active:{
    backgroundColor:"#777"
  }
});
