import React from "react";
import { SectionList, FlatList, StyleSheet, View } from "react-native";
import { List, Divider, Text } from "react-native-paper";
import FAB from "../../../../../shared/FAB";

const SectionListBasics = (props) => {
  const { content, navigation, course } = props;
  // console.log("HOW IS ME",navigation.navigate("OpenMaterial"));
  console.log("ROUTEEE", props);
  function handleNavigation(name, type, id) {
    navigation.navigate("OpenMaterial", {
      name,
      id,
      type,
    });
  }

  const subScreens = [
    {
      icon: "clipboard-check",
      label: "Quizzes",
      onPress: () => navigation.navigate("Quizzes", { quizes: course.quizes }),
    },
    {
      icon: "book-open",
      label: "Assignments",
      onPress: () => navigation.navigate("Assignments"),
    },
    {
      icon: "chat",
      label: "Discusstion forum",
      onPress: () => navigation.navigate("Discussion"),
    },
  ];

  return (
    <React.Fragment>
      <List.Section title="Study material">
        <FlatList
          data={content}
          renderItem={(week) => (
            <List.Accordion
              title={week.item.title}
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <Divider />

              <FlatList
                data={week.item.data}
                renderItem={(type) => (
                  <List.Accordion
                    title={type.item.title}
                    left={(props) => <List.Icon {...props} icon="folder" />}
                  >
                    <FlatList
                      data={type.item.data}
                      renderItem={({ item }) => (
                        <React.Fragment>
                          <Divider />

                          <List.Item
                            title={item.title}
                            left={(props) => (
                              <List.Icon
                                {...props}
                                icon={
                                  type.item.type === "vid"
                                    ? "video"
                                    : "file-pdf"
                                }
                              />
                            )}
                            onPress={() =>
                              handleNavigation(
                                item.title,
                                type.item.type,
                                item.URL
                              )
                            }
                          ></List.Item>
                        </React.Fragment>
                      )}
                    />
                    <Divider />
                  </List.Accordion>
                )}
              />
              <Divider />
            </List.Accordion>
          )}
        />
      </List.Section>
      <FAB navigation={navigation} subScreens={subScreens} />
    </React.Fragment>
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
