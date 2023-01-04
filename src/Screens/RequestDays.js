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
import React, { useState, useContext } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import SmallText from "../components/Texts/SmallText";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import PickerSelect from "react-native-picker-select";
import MainBtn from "../components/Buttons/MainBtn";
import BigText from "../components/Texts/BigText";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { GlobalStates } from "../GlobalStates/GlobalContext";
import KeyboardAvoid from "../components/Containers/KeyboardAvoid";

const { primary, white, goldish, secondary2, secondary, black } = colors;
const RequestDays = () => {
  //  const [selectedStartDay, setSelectedDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  // const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [reasonInput, setReasonInput] = useState();
  const [mode, setMode] = useState("date");
  // const [toDate, setToDate] = useState();
  const [fromDate, setFromDate] = useState();

  const {
    date,
    setDate,
    requests = 0,
    setRequests,
    announcements,
    dayTo,
    setDayTo,
    dayFrom,
    setDayFrom,
  } = useContext(GlobalStates);

  const showDatePicker = () => {
    setShow(true);
    console.log("clicked");
  };

  const onDateSelected = (e, selectedDate) => {
    setDate(moment(selectedDate));
    console.log("this is the selected date ", selectedDate);
  };

  const onCancel = () => {
    setDate(moment());
    setShow(false);
  };

  const onDone = () => {
    onDateSelected(date);
    setDate(date);
    console.log("Date changed to val: ", date);
    setShow(false);
  };

  const renderPicker = () => {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(date)}
        mode={mode}
        is24Hour={true}
        timeZoneOffsetInSeconds={0}
        onDateSelected={Platform.OS === "ios" ? onDateSelected : onAndroid}
      />
    );
  };

  const onAndroid = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(moment(selectedDate));
      onDateSelected(selectedDate);
    }
  };

  const data = [
    { label: "Vacation", value: "Vacation" },
    { label: "Personal", value: "Personal" },
    { label: "Sick", value: "Sick" },
    { label: "Grievence", value: "Grievence" },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoid>
        <View
          style={{
            backgroundColor: primary,
            display: "flex",
            height: 400,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              position: "relative",
              top: 60,
            }}
          >
            <Pressable onPress={showDatePicker}>
              <Card style={{ borderRadius: 30, width: 190, elevation: 40 }}>
                <Card.Content>
                  <Title>From:</Title>
                  <SmallText>{dayTo}</SmallText>
                </Card.Content>
              </Card>
            </Pressable>
            <Pressable onPress={showDatePicker}>
              <Card style={{ borderRadius: 30, width: 190, elevation: 40 }}>
                <Card.Content>
                  <Title>To:</Title>

                  <SmallText>{dayFrom}</SmallText>

                  {/* <CalendarPicker onDateChange={this.onDateChange} /> */}
                </Card.Content>
              </Card>
            </Pressable>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              top: 90,
            }}
          >
            <RegularText
              style={{
                color: secondary,
                fontWeight: "bold",

                justifyContent: "center",
              }}
            >
              You are requesting 9 {selectedDay} day(s) off
            </RegularText>

            <View
              style={{
                position: "relative",
                top: 50,
                width: "85%",
                // height: 50,
                borderColor: secondary2,
                borderWidth: 2,
                backgroundColor: white,
                marginHorizontal: 35,
                borderRadius: 30,
              }}
            >
              <PickerSelect
                //     ? pickerSelectStyles.inputIOS
                style={pickerSelectStyles}
                onValueChange={setSelectedDay}
                items={data}
              />
            </View>
          </View>
        </View>

        <View>
          <TextInput
            style={{
              backgroundColor: white,
              position: "relative",

              height: 130,
              borderRadius: 20,
              width: "90%",
              marginHorizontal: 35,
              marginTop: -35,
              textAlign: "justify",
            }}
            onChangeText={setReasonInput}
            value={reasonInput}
          />

          <MainBtn
            onPress={() => {
              console.log("Submit");
              //  navigation.navigate("RequestDays")
            }}
            style={{
              height: 57,
              position: "relative",
              backgroundColor: goldish,
              top: 100,
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
              Sumbit
            </BigText>
          </MainBtn>
        </View>
        {Platform.OS !== "ios" && show && renderPicker()}
        {Platform.OS === "ios" && (
          <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
            <Modal
              transparent={true}
              animationType="slide"
              visible={show}
              supportedOrientations={["portrait"]}
              onRequestClose={() => setShow(false)}
            >
              <TouchableHighlight
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
                activeOpacity={1}
                visible={show}
              >
                <TouchableHighlight
                  underlayColor={white}
                  style={{ flex: 1, borderColor: "#E9E9E9", borderTopWidth: 3 }}
                  onPress={() => console.log("date picker pressed")}
                >
                  <View
                    style={{
                      backgroundColor: white,
                      height: 256,
                      overflow: "hidden",
                    }}
                  >
                    <View style={{ marginTop: 20 }}>
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date(date)}
                        mode={mode}
                        is24Hour={true}
                        timeZoneOffsetInSeconds={0}
                        onDateSelected={onDateSelected}
                      />
                    </View>
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={onCancel}
                      style={[styles.btnText, styles.btnCancel]}
                    >
                      <Text
                        style={[
                          styles.btnCancel,
                          { fontSize: 15, fontWeight: "bold" },
                        ]}
                      >
                        Cancel
                      </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={onDone}
                      style={[styles.btnText, styles.btnDone]}
                    >
                      <SmallText
                        style={[
                          styles.btnDone,
                          { fontSize: 15, fontWeight: "bold" },
                        ]}
                      >
                        Done
                      </SmallText>
                    </TouchableHighlight>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
            </Modal>
          </TouchableHighlight>
        )}
      </KeyboardAvoid>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,

    borderRadius: 4,
    color: black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,

    color: black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 22,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

export default RequestDays;
