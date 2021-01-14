import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
import SubjectCard from "./components/SubjectCard";
import Modal from "./components/Modal";
import FAB from "../../../../shared/FAB"

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
        { name: "Mathematics Announcements", body: "this is the body of sparta" },
      ],
    },
    {
	  // science course arguments	
      title: "Science",
      subtitle: "3rd primary",
      imgURL:
        "http://projects.nyujournalism.org/ontheroadinthecitygroup3/wp-content/uploads/sites/43/2018/04/science-03-1024x364.png",
      announcements: [
        { name: "Science Announcements", body: "this is the body of sparta" },
      ],
    },
    {
      title: "History",
      subtitle: "3rd primary",
      imgURL: "https://i.guim.co.uk/img/media/e3d9827f235ac40064f15d7df25024aec60500cb/0_134_5616_3370/master/5616.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a88796716cbfc08fa76316a14044fc29",
      announcements: [
        { name: "History Announcements", body: "this is the body of sparta" },
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
