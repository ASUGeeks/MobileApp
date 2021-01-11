import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, Button, Surface } from "react-native-paper";
import QuizComponent from "./QuizComponent/QuizComponent";
import Input from "../../../../shared/Input";

export default () => {
  const [form, updateForm] = useState([]);
  const [question, setQuestion] = useState("");

  const putAnswerFn = () => {
    let arr = [...answerText];
    arr.push(answerText);
    updateForm(arr);
  };

  const handleQuestionText = (text) => {
    updateForm([(oldArr) => [...oldArr, text]]);
  };

  return (
    <ScrollView style={styles.root}>
      <Surface style={styles.root}>
        <FlatList
          data={form}
          renderItem={(form) => {
            <View>
              <Input
                label="type a question"
                value={form.questionTitle}
                setValue={handleQuestionText}
                style={styles.text}
              />
              <Input
                label="type an answer"
                type="outlined"
                value={answerText}
                onChangeText={(text) => setAnswerText(text)}
                style={styles.text}
              />
            </View>;
          }}
        />

        {form.map((Answer) => {
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
          Submit
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
