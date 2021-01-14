import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import SubjectCard from "./components/SubjectCard";
import Modal from "./components/Modal";
import FAB from "../../../../shared/FAB";
import {studentToken , teacherToken} from "../../../../Tokens/Tokens"

// import { Button } from "react-native-paper";

export default ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Assignments, setAssignments] = useState([]);
  const [DisplayedAnnouncement, setDisplayedAnnouncement] = useState("");
  const [Courses, setCourses] = useState([
    {
      // math course arguments
      title: "Mathematics",
      subtitle: "3rd primary",
      imgURL: "https://ngegypt.net/wp-content/uploads/2020/12/Math-001.png",
      announcements: [
        { name: "this is sparta", body: "this is the body of sparta" },
      ],
    },
    {
      // science course arguments
      title: "Science",
      subtitle: "3rd primary",
      imgURL:
        "http://projects.nyujournalism.org/ontheroadinthecitygroup3/wp-content/uploads/sites/43/2018/04/science-03-1024x364.png",
      announcements: [
        { name: "this is sparta", body: "this is the body of sparta" },
      ],
    },
    {
      title: "Mathematics",
      subtitle: "3rd primary",
      imgURL: "https://i.imgflip.com/2xlcka.png",
      announcements: [
        { name: "this is sparta", body: "this is the body of sparta" },
      ],
    },
  ]);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  function getContent() {
  
    axios
      .get("http://192.168.1.6:5100/me", { headers: { token: teacherToken } })
      .then((r) => {
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
  function handleNavigation(name, id) {
    navigation.navigate("CourseMaterial", {
      name,
      id,
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
            title={course.title}
            subtitle={course.subtitle}
            imgURL={course.imgURL}
            announcements={course.announcements}
            handleNavigation={handleNavigation}
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
