import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
// import { TouchableHighlight } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-web";
const DatePicker = () => {
  const [selectedStartDay, setSelectedDay] = useState(null);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState("Date");
  const [toDate, setToDate] = useState();
  const [fromDate, setFromDate] = useState();

  const onChange = (e, selectDate) => {
    // setShow(Platform.OS === "ios");
    setDate(moment(selectDate));
    // };

    // const showMode = (currentMode) => {
    //   setShow(true);
    //   setMode(currentMode);
  };
  return (
    <TouchableHighlight style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={show}
        supportedOrientations={["portrait"]}
        onRequestClose={() => setShow(false)}
      >
        <TouchableHighlight
          style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}
          activeOpacity={1}
          visible={show}
          onPress={setShow(false)}
        >
          <TouchableHighlight
            underlayColor={white}
            style={{ flex: 1 }}
            onPress={() => console.log("date picker pressed")}
          >
            <View style={{ marginTop: 20 }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                timeZoneOffsetInSeconds={0}
                onChange={onChange}
              />
            </View>
          </TouchableHighlight>
        </TouchableHighlight>
      </Modal>
    </TouchableHighlight>
  );
};

export default DatePicker;
