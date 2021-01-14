import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import { Text, Divider, List, Button } from "react-native-paper";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import Radio from "../../../../shared/Radio";
import Menu from "../../../../shared/Menu";
import StudentList from "./components/StudentsList";
import TeacherList from "./components/TeacherList";

import axios from "axios";
import {
  adminToken,
  teacherToken,
  studentToken,
} from "../../../../Tokens/Tokens";

export default () => {
  const [Courses, setCourses] = useState([
    { name: "computerOrganization", code: "CSE2020" },
    { name: "Logic design", code: "CSE2021" },
    { name: "Math", code: "CSE2022" },
    { name: "Software engineering", code: "CSE2023" },
  ]);
  const [SelectedCoursesIndex, setSelectedCoursesIndex] = useState(null);
  const [list, seList] = useState(["Students", "Teachers"]);

  const [Students, setStudents] = useState([
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
    { name: "mahmoud", selected: false },
    { name: "Hammad", selected: false },
    { name: "Ali", selected: false },
    { name: "Samir", selected: false },
    { name: "Ramy", selected: false },
  ]);

  useEffect(() => {
    getUsers();
  }, []);

  function assignTeacher(assholes = ["5ffd84a4f3a89028d9d7d9b5"]) {
    const course = {
      course_code: "CSE202",
      teachers: assholes,
    };

    axios
      .post("http://192.168.1.6:5100/users/assign-teachers", course, {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("lololo", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  function assginStudents(students = ["60000a755455f71dbfcf366f"]) {
    const course = {
      course_code: "CSE202",
      students,
    };

    axios
      .post("http://192.168.1.6:5100/users/enroll-students", course, {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("lololo", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  function getUsers() {
    axios
      .get("http://192.168.1.6:5100/list-users", {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("users", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));

    axios
      .get("http://192.168.1.6:5100/courses", {
        headers: { token: adminToken },
      })
      .then((r) => {
        console.log("courses", r);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));

    assignTeacher();
    assginStudents();
  }

  const handleCheck = (index, state) => {
    const oldContent = [...Students];
    oldContent[index].selected = !state;
    setStudents(oldContent);
  };
  const handleCheckTeacher = (index, state) => {
    const oldContent = [...Teacher];
    oldContent[index].selected = !state;
    setTeacher(oldContent);
  };
  function handeSubjectSelect(index) {
    console.log("subject number ", index);
    setSelectedCoursesIndex(index);
  }
  const handleCheckedNames = (Students, Teacher) => {
    let studentArr = [Students.filter(({ selected }) => selected)];
    let teacherArr = [Teacher.filter(({ selected }) => selected)];
    console.log(studentArr);
    console.log(teacherArr);
  };

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
          extraData={[Students, Teacher]}
          renderItem={({ item }) => (
            <List.Accordion
              title={item}
              left={(props) => <List.Icon {...props} icon="account" />}
            >
              <Divider />

              {SelectedCoursesIndex !== null ? (
                item == "Teachers" ? (
                  <TeacherList
                    items={Teacher}
                    handleCheck={handleCheckTeacher}
                  />
                ) : (
                  <StudentList items={Students} handleCheck={handleCheck} />
                )
              ) : null}
              <Divider />
            </List.Accordion>
          )}
        />
      </List.Section>
      <Button
        type="text"
        mode="text"
        onPress={() => handleCheckedNames(Students, Teacher)}
        mode="contained"
      >
        Accept
      </Button>
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
