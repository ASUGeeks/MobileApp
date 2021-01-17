import React, { useState, useEffect } from "react";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { studentToken } from "../../../../Tokens/Tokens";

export default (props) => {
  console.log("propppppppps", props);
  const q = props.route.params.quiz;
  const { quizzId } = props.route.params;

  const [quiz, setquiz] = useState(q);
  const [Grad, setGrad] = useState(null);

  const { params } = props.route;
  const AssignmentTitle = params.assTitle;
  const AssignmentID = params.assId;

  function handleSubmit() {
    console.log("ANSOWSFAF", quiz);
    // const QuizID = "600070ca0ef0af2eb7552639";
    quiz;
    axios
      .post(
        `http://192.168.1.6:5100/submit-quiz`,
        { answers: quiz, quiz_id: quizzId },
        {
          headers: { token: studentToken },
        }
      )
      .then((r) => {
        console.log("graddinggggg", r);
        const { grade } = r.data;
        const mark = (grade[0] / grade[1]) * 100;
        setGrad(mark);
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
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
                style={Questions.answer === AnswerIndex ? styles.active : ""}
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

      <Submit handleSubmit={handleSubmit} />
      {Grad !== null ? <Text>{Grad} %</Text> : null}
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
  active: {
    backgroundColor: "#777",
  },
});
