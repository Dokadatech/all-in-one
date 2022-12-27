import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  Pressable,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import RegularText from "../components/Texts/RegularText";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { colors } from "../components/colors";
import PickerSelect from "react-native-picker-select";

const { primary, white, goldish, secondary2, secondary, black } = colors;

const data = [
  { label: "John Russel", value: 1 },
  { label: "Jane Doe", value: 2 },
  { label: "Harry Styles", value: 3 },
  { label: "Kelly Rowland", value: 4 },
];

const dataChoice = [
  { label: "All Employees", value: 1 },
  { label: "Single Employee", value: 2 },
];
const CreateAnnouncement = () => {
  const [reasonInput, setReasonInput] = useState();
  const [selectType, setSelectType] = useState();
  const [selectedEmp, setSelectedEmp] = useState();

  const checkV = () => {
    console.log(
      ` This is the selected Employee ${selectedEmp}`,
      "\n ",
      ` This is the selected type ${selectType}`
    );
  };

  checkV();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: primary,

          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignSelf: "flex-start",
          height: 450,
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <View
          style={{
            position: "relative",
            height: 420,
            alignItems: "center",
            width: "100%",
            display: "flex",
          }}
        >
          <View
            style={{
              position: "relative",
              top: 50,
              borderColor: secondary2,
              borderWidth: 2,
              backgroundColor: white,
              width: "90%",
              marginHorizontal: 35,
              borderRadius: 30,
            }}
          >
            <PickerSelect
              style={pickerSelectStyles}
              onValueChange={setSelectType}
              items={dataChoice}
            />
          </View>

          {selectType === 2 ? (
            <View
              style={{
                position: "relative",
                top: 90,
                borderColor: secondary2,
                borderWidth: 2,
                backgroundColor: white,
                width: "90%",
                marginHorizontal: 35,
                borderRadius: 30,
              }}
            >
              <PickerSelect
                style={pickerSelectStyles}
                onValueChange={setSelectedEmp}
                items={data}
              />
            </View>
          ) : null}
        </View>
      </View>

      {
        //next view starts here
      }
      <View style={{ flex: 1, zIndex: 22 }}>
        <View style={{ position: "relative", top: -60 }}>
          <TextInput
            style={{
              backgroundColor: white,
              position: "relative",
              height: 160,
              borderRadius: 20,
              marginHorizontal: 10,
              padding: 5,
            }}
            placeholder="Job Desription"
            onChangeText={setReasonInput}
            value={reasonInput}
          />
        </View>

        <MainBtn
          onPress={() => {
            console.log("Submit");
            //  navigation.navigate("RequestDays")
          }}
          style={{
            height: 57,
            position: "relative",
            backgroundColor: goldish,
            top: 200,
          }}
        >
          <BigText
            style={{
              color: primary,
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "left",
            }}
          >
            Send Announcement
          </BigText>
        </MainBtn>
      </View>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: "gray",
    borderRadius: 4,
    color: black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    // borderColor: "purple",
    // borderRadius: 8,
    color: black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default CreateAnnouncement;
