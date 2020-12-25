import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  IconButton,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const RightContent = (props) => (
  <IconButton {...props} icon="menu" onPress={() => {}} />
);

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = ({ title, subtitle, imgURL, handleNavigation }) => (
    <Card
      elevation={4}
      style={styles.root}
      onPress={() =>handleNavigation(title,subtitle)}
    >
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={LeftContent}
        right={RightContent}
      />
      <Card.Content>
        {/* <Title>Card title</Title>
      <Paragraph>Card content</Paragraph> */}
      </Card.Content>
      <Card.Cover source={{ uri: imgURL }} />
      {/* <Card.Actions>
      <Button>Lectures</Button>
      <Button>Videos</Button>
      <Button>Quizzes</Button>
      <Button>Assignments</Button>
    </Card.Actions> */}
    </Card>
);

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});

export default MyComponent;
