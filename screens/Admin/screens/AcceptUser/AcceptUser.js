import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import { Text, Divider, List } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";
import axios from "axios";
import Menu from "./components/Menu";
import StudentList from "./components/StudentsList";
import TeacherList from "./components/TeacherList";

export default () => {
  const [Courses, setCourses] = useState([
    { name: "computerOrganization", code: "CSE2020" },
    { name: "Logic design", code: "CSE2021" },
    { name: "Math", code: "CSE2022" },
    { name: "Software engineering", code: "CSE2023" },
  ]);
  const [SelectedCoursesIndex, setSelectedCoursesIndex] = useState(null);
  const [list, seList] = useState(["Students", "Teachers"]);

  const [Studnets, setStudnets] = useState([
    { name: "mahmoud", selected: false },
    { name: "Hammad", selected: false },
    { name: "Ali", selected: false },
    { name: "Samir", selected: false },
    { name: "Ramy", selected: false },
    { name: "nader", selected: false },
    { name: "hazem", selected: false },
    { name: "tamer", selected: false },
    { name: "hesham", selected: false },
    { name: "Atout", selected: false },
  ]);
  const [Teacher, setTeacher] = useState([
    { name: "simpo" },
    { name: "Emad" },
    { name: "Mahmoud ghandor" },
    { name: "Mahmoud essam" },
  ]);

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setspecifications
    // setspecifications("hello, this is the course specification");fbsszm.k;likil;ki8k.    ERE´FJFIF
  }, []);

  function handleSubmit() {
    // const adminToken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E";
    // axios
    //   .post("http://localhost:5100/create-course", course, {
    //     headers: { token: adminToken },
    //   })
    //   .then((r) => {
    //     console.log("login", r.data);
    //     // storeToken()
    //   })
    //   .catch((bug) => console.log("BUBUBUUB", bug));
  }

  const handleCheck = (index, state) => {
    const oldContent = [...Studnets];
    oldContent[index].selected = !state;
    setStudnets(oldContent);
  };

  function handeSubjectSelect(index) {
    console.log("subject number ", index);
    setSelectedCoursesIndex(index);
  }
  function handleNavigation(name, type, id) {
    navigation.navigate("OpenMaterial", {
      name,
      id,
      type,
    });
  }
  return (
    <ScrollView style={styles.root}>
      {/* Course */}
      <View style={styles.box}>
        <Text style={styles.title}>Select subject</Text>
        {SelectedCoursesIndex !== null ? (
          <Text style={styles.subtitle}>
            Selected Subject: {Courses[SelectedCoursesIndex].name}
          </Text>
        ) : null}
        <Menu items={Courses} handlePress={handeSubjectSelect} />
      </View>
      <List.Section title="Accept Menu">
        <FlatList
          data={list}
          extraData={Studnets}
          renderItem={({ item }) => (
            <List.Accordion
              title={item}
              left={(props) => <List.Icon {...props} icon="account" />}
            >
              <Divider />

              <StudentList items={Studnets} handleCheck={handleCheck} />

              <Divider />
            </List.Accordion>
          )}
        />
      </List.Section>

      {/* Students */}
      <Divider />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
  title: {
    fontSize: 30,
  },
  box: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
