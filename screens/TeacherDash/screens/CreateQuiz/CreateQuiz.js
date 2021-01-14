import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, Button, Surface, Divider } from "react-native-paper";
import Input from "../../../../shared/Input";
import { teacherToken } from "../../../../Tokens/Tokens";

function genHash() {
  return Math.random().toString(36);
}

export default () => {
  const [form, updateForm] = useState([]);

  const addQuestion = () => {
    const temp = {
      hash: genHash(),
      question: "",
      valid_answers: ["", "", "", ""],
      answer: 0,
    };
    updateForm((oldArr) => [...oldArr, temp]);
  };

  function handleSubmit() {
    const sk = {
      course_code: "CSE202",
      quiz: form,
      start_date: new Date(),
      title: "Quiz N'1",
    };

    axios
      .post(`http://192.168.1.6:5100/create-quiz`, sk, {
        headers: { token: teacherToken },
      })
      .then((r) => {
        console.log("Great!", r);
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  const handleQuestionText = (lable, text, index) => {
    const oldContent = [...form];
    oldContent[index].question = text;
    updateForm(oldContent);
  };
  const handleAnswerText = (lable, text, index, parentIndex, grandIndex) => {
    const oldContent = [...form];
    oldContent[parentIndex].valid_answers[index] = text;
    updateForm(oldContent);
  };

  const handleCorrectAnswer = (lable, text, index) => {
    const oldContent = [...form];
    oldContent[index].answer = text;
    updateForm(oldContent);
  };

  return (
    <ScrollView style={styles.root}>
      <Surface style={styles.surface}>
        <FlatList
          data={form}
          renderItem={(form) => (
            <View key={form.index}>
              <Text style={styles.text}>Question {form.index + 1}</Text>
              <Input
                label="type a question"
                value={form.item.question}
                setValue={handleQuestionText}
                style={styles.text}
                index={form.index}
              />

              {form.item.valid_answers.map((answers, index) => (
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
                value={form.item.answer}
                setValue={handleCorrectAnswer}
                style={styles.text}
                index={form.index}
              />
              <Divider />

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
          mode="outlined"
          onPress={() => {
            addQuestion();
          }}
        >
          Add Question
        </Button>
        {form.length ? (
          <Button
            type="text"
            mode="contained"
            onPress={() => {
              handleSubmit();
            }}
          >
            Submit Quiz
          </Button>
        ) : null}
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
    margin: 20,
    fontSize: 20,
  },
});
