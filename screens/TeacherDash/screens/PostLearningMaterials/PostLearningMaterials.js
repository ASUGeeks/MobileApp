import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";

const text = () => {
  const [Content, setContent] = useState([
    {
      title: "Week1",
      data: [
        {
          title: "Recorded lectures",
          type: "vid",
          data: [
            {
              title: "Lecture 1",
              URL: "OMMXrmMsjAk",
            },
            {
              title: "Lecture 2",
              URL: "OMMXrmMsjAk",
            },
          ],
        },
        {
          title: "Written lectures",
          type: "pdf",
          data: [
            {
              title: "Lecture 1",
              URL: "1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
            },
            {
              title: "Lecture 2",
              URL: "id=1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
            },
          ],
        },
      ],
    },
    {
      title: "Week2",
      data: [
        {
          title: "Recorded lectures",
          type: "vid",
          data: [
            {
              title: "Lecture 1",
              URL: "OMMXrmMsjAk",
            },
            {
              title: "Lecture 2",
              URL: "OMMXrmMsjAk",
            },
          ],
        },
        {
          title: "Written lectures",
          type: "pdf",
          data: [
            {
              title: "Lecture 1",
              URL: "1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
            },
            {
              title: "Lecture 2",
              URL: "id=1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
            },
          ],
        },
      ],
    },
  ]);

  const [Week, setWeek] = useState("");
  const [URL, setURL] = useState("");

  function addWeek() {
    const oldContent = [...Content];
    console.log("FHFHFHF", oldContent);
    oldContent.push({
      title: "",
      data: [
        {
          title: "",
          type: "",
          data: [{ title: "", URL: "" }],
        },
      ],
    });
    console.log("HEY HO YA WALLA", oldContent);
    setContent(oldContent);
  }

  function addType(weekIndex) {
    const oldContent = [...Content];
    oldContent[weekIndex].data.push({
      title: "",
      type: "",
      data: [{ title: "", URL: "" }],
    });
    setContent(oldContent);
  }

  function addContent(weekIndex, typeIndex) {
    console.log("Content IS BEING ADDED");
    const oldContent = [...Content];
    oldContent[weekIndex].data[typeIndex].data.push({ title: "", URL: "" });
    console.log(weekIndex, typeIndex);
    setContent(oldContent);
  }

  function handleWeekTitleChange(lable, text, index) {
    const oldContent = [...Content];
    oldContent[index].title = text;
    setContent(oldContent);
  }

  function handleTypeChange(lable, text, index, parentIndex) {
    const oldContent = [...Content];
    oldContent[parentIndex].data[index][lable] = text;
    setContent(oldContent);
  }

  function handleContentChange(lable, text, index, parentIndex, grandIndex) {
    const oldContent = [...Content];
    oldContent[grandIndex].data[parentIndex].data[index][lable] = text;
    setContent(oldContent);
  }

  const adminToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZmZDYzMjc5M2QyYWE1OWU5M2IwYTYzIiwidXNlcm5hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMDQ0NDQwNX0.oQW_kkOz5CzJYPGnDjlUwozJzEIzP7BI7RR2qaI5R9E";
  function handleSubmit() {
    axios
      .post(
        "http://192.168.1.6:5100/update-course",
        { code: "CSE219", content: Content },
        { headers: { token: adminToken } }
      )
      .then((r) => {
        console.log("login", r.data);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }

  return (
    <ScrollView style={styles.root}>
      {/*********** Week start ***********/}
      <View style={[styles.week]}>
        <FlatList
          data={Content}
          renderItem={(week) => (
            <View style={[styles.week, styles.BL1]}>
              <Input
                label="Title"
                value={week.item.title}
                setValue={handleWeekTitleChange}
                index={week.index}
              />

              {/*********** type start ***********/}

              <View style={styles.week}>
                {week.item.data.map((type, typeindex) => (
                  <View key={typeindex} style={[styles.week, styles.BL2]}>
                    <Input
                      label="title"
                      value={type.title}
                      index={typeindex}
                      parentIndex={week.index}
                      setValue={handleTypeChange}
                    />
                    <Input
                      label="type"
                      value={type.type}
                      index={typeindex}
                      parentIndex={week.index}
                      setValue={handleTypeChange}
                    />

                    {/*********** Content start ***********/}

                    <View style={[styles.week, styles.BL3]}>
                      {type.data.map((content, contentindex) => (
                        <View key={contentindex} style={styles.week}>
                          <Input
                            label="title"
                            value={content.title}
                            index={contentindex}
                            parentIndex={typeindex}
                            grandIndex={week.index}
                            setValue={handleContentChange}
                          />
                          <Input
                            label="URL"
                            value={content.URL}
                            index={contentindex}
                            parentIndex={typeindex}
                            grandIndex={week.index}
                            setValue={handleContentChange}
                          />
                        </View>
                      ))}
                      <Submit
                        handleSubmit={() => addContent(week.index, typeindex)}
                        label="Add Content"
                      />
                    </View>

                    {/*********** Content end ***********/}
                  </View>
                ))}
                <Submit
                  handleSubmit={() => addType(week.index)}
                  label="Add Type"
                />
              </View>

              {/*********** type End ***********/}
            </View>
          )}
        />
        <Submit handleSubmit={addWeek} label="Add Week" />
      </View>
      {/*********** Week End ***********/}

      <Submit handleSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
  },
  week: {
    margin: 10,
    // borderWidth: 2,
    borderRadius: 8,
  },
  BL1: {
    // borderColor: "#ff0",
    backgroundColor: "#cacccf",
  },
  BL2: {
    // borderColor: "#f00",
    backgroundColor: "#919294",
  },
  BL3: {
    // borderColor: "#f0f",
    // backgroundColor: "#f0f4",
  },
});

export default text;
