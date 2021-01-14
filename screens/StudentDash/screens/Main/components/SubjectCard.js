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
import Menu from "../../../../../shared/Menu";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = ({
  title,
  subtitle,
  imgURL,
  handleNavigation,
  announcements,
  showModal,
  setDisplayedAnnouncement,
  content
}) => {
  function handleAnnouncePress(message) {
    showModal();
    setDisplayedAnnouncement(message);
  }

  return (
    <Card
      elevation={4}
      style={styles.root}
      onPress={() => handleNavigation(title, subtitle,content)}
    >
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={LeftContent}
        right={() =>
          announcements.length ? (
            <Menu
              isNotif={true}
              items={announcements}
              handlePress={handleAnnouncePress}
            />
          ) : null
        }
      />
      {/* <Card.Content></Card.Content> */}
      <Card.Cover source={{ uri: imgURL }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
    zIndex: 1,
  },
});

export default MyComponent;
