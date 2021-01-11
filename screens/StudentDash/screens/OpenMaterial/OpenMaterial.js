import React, { useState, useEffect } from "react";
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { View } from "react-native";
import { WebView } from "react-native-webview";
const MyComponent = ({ route }) => {
  const { name, id, type } = route.params;
  const driveHash = "https://drive.google.com/open?id=";
  const youtubeHash = "https://www.youtube.com/embed/";

  const [uri, seturi] = useState("");

  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
    let newuri = "";
    if (type === "vid") {
      newuri += youtubeHash;
    } else if (type === "pdf") {
      newuri += driveHash;
    }
    newuri += id;
    seturi(newuri);
  }, []);

  console.log("ahahaha", uri);
  return (
    <WebView
      source={{
        uri,
      }}
      style={{ marginTop: 20 }}
    />
  );
};

export default MyComponent;
{
  /*  */
}
