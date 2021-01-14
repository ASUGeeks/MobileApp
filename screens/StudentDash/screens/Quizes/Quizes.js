import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import QuizzCard from "./components/QuizzCard";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
// import { Button } from "react-native-paper";

export default (props) => {
  const { title, subtitle, handleClick, assID, navigation, route } = props;

  console.log("ROUUUTES", route);
  const { quizes } = route.params;
  console.log("quizes", quizes);

  const [Title, setTitle] = useState("");

  const showModal = () => setVisible(true);

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }

  function handleNavigate(quiz,quizzId) {
    navigation.navigate("Quizz screen", { quiz ,quizzId});
  }

  return (
    <ScrollView style={styles.root}>
      {quizes.map((quiz, index) => (
        <QuizzCard
          title={`Quiz ${index + 1}`}
          subtitle={quiz.title}
          quizzId={quiz._id}
          content={quiz.content}
          handleClick={handleNavigate}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
