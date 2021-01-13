import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="bomb" />;

const MyComponent = ({ title, subtitle,handleClick }) => (
  <Card style={styles.root} onPress={() => handleClick()}>
    <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
  </Card>
);

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
});

export default MyComponent;
