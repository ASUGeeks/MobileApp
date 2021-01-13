import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="bomb" />;

const MyComponent = (props) => {
  const { title, subtitle, handleClick ,assID} = props;
console.log("PROPS", props)
  return (
    <Card style={styles.root} onPress={() => console.log(title,assID)}>
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
});

export default MyComponent;
