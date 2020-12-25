import * as React from "react";
import { List } from "react-native-paper";

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Study material">
      <List.Accordion
        title="Week 1"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Accordion
          title="Recorded lectures"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item
            title="Lecture 1"
            left={(props) => <List.Icon {...props} icon="video" />}
          ></List.Item>

          <List.Item
            title="Lecture 2"
            left={(props) => <List.Icon {...props} icon="video" />}
          />
        </List.Accordion>
        <List.Accordion
          title="Written summary"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item
            title="Lecture 3"
            left={(props) => <List.Icon {...props} icon="video" />}
          />
          <List.Item
            title="Lecture 4"
            left={(props) => <List.Icon {...props} icon="video" />}
          />
          <List.Item
            title="Lecture 5"
            left={(props) => <List.Icon {...props} icon="video" />}
          />
          <List.Item
            title="Lecture 6"
            left={(props) => <List.Icon {...props} icon="video" />}
          />
        </List.Accordion>
      </List.Accordion>

      <List.Accordion
        title="Week 2 "
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Accordion
          title="written lectures "
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item
            title="Lecture 1"
            left={(props) => <List.Icon {...props} icon="file-pdf" />}
          />
          <List.Item
            title="Lecture 2"
            left={(props) => <List.Icon {...props} icon="file-pdf" />}
          />
          <List.Item
            title="Lecture 3"
            left={(props) => <List.Icon {...props} icon="file-pdf" />}
          />
          <List.Item
            title="Lecture 4"
            left={(props) => <List.Icon {...props} icon="file-pdf" />}
          />
        </List.Accordion>
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
