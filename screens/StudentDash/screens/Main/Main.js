import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import SubjectCard from "./components/SubjectCard";
import Modal from "./components/Modal";
export default ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Assignments, setAssignments] = useState([]);
  const [DisplayedAnnouncement, setDisplayedAnnouncement] = useState("");
  const [Courses, setCourses] = useState([
    {
      title: "Mathematics",
      subtitle: "3rd primary",
      imgURL: "https://ngegypt.net/wp-content/uploads/2020/12/Math-001.png",
      announcements: [
        { name: "this is sparta", body: "this is the body of sparta" },
      ],
    },
    {
      title: "Science",
      subtitle: "3rd primary",
      imgURL: "http://projects.nyujournalism.org/ontheroadinthecitygroup3/wp-content/uploads/sites/43/2018/04/science-03-1024x364.png",
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
    const adminToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E";
    const simpo =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDg0YTRmM2E4OTAyOGQ5ZDdkOWI1IiwidXNlcm5hbWUiOiJzaW1wbyIsImVtYWlsIjoic2ltcG9AZ21haWwuY29tIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE2MTA0NTU1NzZ9.AAoguuRWiTyyPYPV7Dn1LH275-4ki1XTpVHPqe8hlh4";
    axios
      .get("http://localhost:5100/me", { headers: { token: simpo } })
      .then((r) => {
        console.log("get subjectsss", r);
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
    <ScrollView style={styles.root}>

      <Modal
        visible={visible}
        setVisible={setVisible}
        message={DisplayedAnnouncement}
      />
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
      ))}{" "}
      {/*     
      <SubjectCard
        title="Science"
        subtitle="3rd primary"
        imgURL="data:image/jpeg;base64,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"
        handleNavigation={handleNavigation}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
