import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";

const Fuck = () => {
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

  function addWeek(){
    console.log("WEEEK IS BEING ADDED")
  }
  
  function addType(){
    console.log("Type IS BEING ADDED")
  }
  
  function addContent(weekIndex,typeIndex){

    console.log("Content IS BEING ADDED")
    const oldContent = [...Content];
    oldContent[weekIndex].data[typeIndex].data.push({title:"",URL:""})
    console.log(weekIndex,typeIndex)
    setContent(oldContent);

  }

  function handleWeekTitleChange(lable, fuck, index) {
    const oldContent = [...Content];
    oldContent[index].title = fuck;
    setContent(oldContent);
  }

  function handleTypeChange(lable, fuck, index, parentIndex) {
    const oldContent = [...Content];
    oldContent[parentIndex].data[index][lable] = fuck;
    setContent(oldContent);
  }

  function handleContentChange(lable, fuck, index, parentIndex, grandIndex) {
    const oldContent = [...Content];
    oldContent[grandIndex].data[parentIndex].data[index][lable] = fuck;
    setContent(oldContent);
  }

  function handleSubmit() {
    console.log("Submit");
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
                      <Submit handleSubmit={()=>addContent(week.index,typeindex)} label="Add Content" />
                    </View>

                    {/*********** Content end ***********/}
                  </View>
                ))}
                <Submit handleSubmit={addType} label="Add Type" />
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
    borderWidth: 2,
    borderRadius: 8,
  },
  BL1: {
    borderColor: "#ff0",
    backgroundColor: "#ff04",
  },
  BL2: {
    borderColor: "#f00",
    backgroundColor: "#f004",
  },
  BL3: {
    borderColor: "#f0f",
    backgroundColor: "#f0f4",
  },
});

export default Fuck;
