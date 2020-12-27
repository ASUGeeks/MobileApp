import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, ScrollView } from "react-native";
import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";

export default () => {
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
  ]);

  const [Week, setWeek] = useState("");
  const [URL, setURL] = useState("");

  function handleWeekTitleChange(fuck,index){
    const oldContent = [...Content]
    oldContent[index].title=fuck
    setContent(oldContent)
  }
  function handleTypeChange(fuck,index){
    
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
              <Input label="Title" value={week.item.title} setValue={handleWeekTitleChange} index={week.index}/>

              {/*********** type start ***********/}

              <View style={styles.week}>
                <FlatList
                  data={week.item.data}
                  renderItem={(type) => (
                    <View style={[styles.week, styles.BL2]}>
                      <Input
                        label="Title"
                        value={type.item.title}
                        setValue={setURL}
                      />
                      <Input
                        label="Type"
                        value={type.item.type}
                        setValue={setURL}
                      />

                      {/*********** Content start ***********/}

                      <View style={[styles.week, styles.BL3]}>
                        <FlatList
                          data={type.item.data}
                          renderItem={(content) => (
                            <View style={styles.week}>
                              <Input
                                label="Title"
                                value={content.item.title}
                                setValue={setURL}
                              />
                              <Input
                                label="Url"
                                value={content.item.URL}
                                setValue={setURL}
                              />
                            </View>
                          )}
                        />
                      </View>

                      {/*********** Content end ***********/}
                    </View>
                  )}
                />
              </View>

              {/*********** type End ***********/}
            </View>
          )}
        />
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
    borderLeftWidth: 2,
  },
  BL1: {
    borderLeftColor: "#ff0",
  },
  BL2: {
    borderLeftColor: "#f00",
  },
  BL3: {
    borderLeftColor: "#f0f",
  },
});
