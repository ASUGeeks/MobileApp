import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import SubjectCard from "./components/SubjectCard";
import Modal from "./components/Modal";
import FAB from "../../../../shared/FAB";
import { studentToken, teacherToken } from "../../../../Tokens/Tokens";

// import { Button } from "react-native-paper";

export default ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Assignments, setAssignments] = useState([]);
  const [DisplayedAnnouncement, setDisplayedAnnouncement] = useState("");
  const [Courses, setCourses] = useState([]);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  function getContent() {
    axios
      .get("http://192.168.1.6:5100/me", { headers: { token: studentToken } })
      .then((r) => {
        setCourses(r.data.courses);
        console.log("get LOLLLLLLLLL", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");

    getContent();
  }, []);
  function handleNavigation(content) {
    console.log("CONTENT", content);
    navigation.navigate("CourseMaterial", {
      course: content,
    });
  }
  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <React.Fragment>
      <Modal
        visible={visible}
        setVisible={setVisible}
        message={DisplayedAnnouncement}
      />
      <ScrollView style={styles.root}>
        {Courses.map((course) => (
          <SubjectCard
            title={course.name}
            subtitle={course.code}
            imgURL={course.imgURL}
            content={course.content}
            announcements={course.announcements}
            handleNavigation={() => handleNavigation(course)}
            showModal={showModal}
            setDisplayedAnnouncement={setDisplayedAnnouncement}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
