import axios from "axios";
import React, { useState, useEffect } from "react";

// import { View, StyleSheet, ScrollView, Text } from "react-native";
import {Text} from "react-native-paper"

import ContentList from "./components/ContentList";
import FAB from "../../../../shared/FAB"

export default ({ route, navigation }) => {
  const [Content, setContent] = useState([]);

  function getContent() {
    const adminToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E";
    const simpo =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDg0YTRmM2E4OTAyOGQ5ZDdkOWI1IiwidXNlcm5hbWUiOiJzaW1wbyIsImVtYWlsIjoic2ltcG9AZ21haWwuY29tIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE2MTA0NTU1NzZ9.AAoguuRWiTyyPYPV7Dn1LH275-4ki1XTpVHPqe8hlh4";

    axios
      .get("http://localhost:5100/courses", { headers: { token: simpo } })
      .then((r) => {
        console.log("get", r.data.courses[0].content);
        const contetnlol = r.data.courses[0].content;
        setContent(contetnlol);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }
  console.log("THISI IS PROPS", route);
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
    getContent();
  }, []);

  return (
    <React.Fragment>

      <ContentList content={Content} navigation={navigation} />;
      {/* <FAB/> */}
    </React.Fragment>
  );
};
