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
      question: "",
      answers: ["", "", "", ""],
      correctAnswer: "",
    };
    updateForm((oldArr) => [...oldArr, temp]);
  };

  const handleQuestionText = (lable, text, index) => {
    const oldContent = [...form];
    oldContent[index].question = text;
    updateForm(oldContent);
  };
  const handleAnswerText = (lable, text, index, parentIndex, grandIndex) => {
    const oldContent = [...form];
    console.log(grandIndex, parentIndex, index, oldContent);
    oldContent[parentIndex].answers[index] = text;
    updateForm(oldContent);
  };

  const handleCorrectAnswer = (lable, text, index) => {
    const oldContent = [...form];
    oldContent[index].correctAnswer = text;
    updateForm(oldContent);
  };

  return (
    <ScrollView style={styles.root}>
      <Surface style={styles.surface}>
        <FlatList
          data={form}
          renderItem={(form) => (
            <View key={form.index}>
              {console.log(form.item)}
              <Text style={styles.text}>Question {form.index + 1}</Text>
              <Input
                label="type a question"
                value={form.item.question}
                setValue={handleQuestionText}
                style={styles.text}
                index={form.index}
              />

              {form.item.answers.map((answers, index) => (
                <View key={index}>
                  <Input
                    label="type an answer"
                    value={answers}
                    setValue={handleAnswerText}
                    style={styles.text}
                    index={index}
                    parentIndex={form.index}
                  />
                </View>
              ))}
              <Input
                label="type the correct answer"
                value={form.item.correctAnswer}
                setValue={handleCorrectAnswer}
                style={styles.text}
                index={form.index}
              />
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              />
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
      <Button
        type="text"
        mode="text"
        onPress={() => {
          console.log(form);
        }}
      >
        Submit Quiz
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
    justifyContent: "center",
    elevation: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: "40px",
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
    fontSize: 12,
  },
});
