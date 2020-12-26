import React from "react";
import { SectionList, FlatList, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <List.Section title="Study material">
      <FlatList
        data={[
          {
            title: "Week1",
            data: [
              {
                title: "Recorded lectures",
                data: [{ title: "Lecture 1" }, { title: "Lecture 2" }],
              },
            ],
          },
        ]}
        renderItem={({ item }) => (
          <List.Accordion
            title={item.title}
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <FlatList
              data={item.data}
              renderItem={({ item }) => (
                <List.Accordion
                  title={item.title}
                  left={(props) => <List.Icon {...props} icon="folder" />}
                >
                  <FlatList
                    data={item.data}
                    renderItem={({ item }) => (
                      <List.Item
                        title={item.title}
                        left={(props) => <List.Icon {...props} icon="video" />}
                      ></List.Item>
                    )}
                  />
                </List.Accordion>
              )}
            />
          </List.Accordion>
        )}
      />
    </List.Section>
  );
};

export default SectionListBasics;

// import * as React from "react";

// const MyComponent = (content) => {
//   const [expanded, setExpanded] = React.useState(true);

//   const handlePress = () => setExpanded(!expanded);

//   return (
//     <List.Section title="Study material">
//       <List.Accordion
//         title="Week 1"
//         left={(props) => <List.Icon {...props} icon="folder" />}
//       >
//         <List.Accordion
//           title="Recorded lectures"
//           left={(props) => <List.Icon {...props} icon="folder" />}
//         >
//           <List.Item
//             title="Lecture 1"
//             left={(props) => <List.Icon {...props} icon="video" />}
//           ></List.Item>
//         </List.Accordion>
//         <List.Accordion
//           title="Written summary"
//           left={(props) => <List.Icon {...props} icon="folder" />}
//         >
//           <List.Item
//             title="Lecture 3"
//             left={(props) => <List.Icon {...props} icon="video" />}
//           />
//           <List.Item
//             title="Lecture 4"
//             left={(props) => <List.Icon {...props} icon="video" />}
//           />
//           <List.Item
//             title="Lecture 5"
//             left={(props) => <List.Icon {...props} icon="video" />}
//           />
//           <List.Item
//             title="Lecture 6"
//             left={(props) => <List.Icon {...props} icon="video" />}
//           />
//         </List.Accordion>
//       </List.Accordion>
//     </List.Section>
//   );
// };

// export default MyComponent;
