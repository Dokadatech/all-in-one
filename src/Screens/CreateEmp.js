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

const { primary, white, goldish, secondary2, secondary, black } = colors;

const CreateEmp = () => {
  const [reasonInput, setReasonInput] = useState();
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
        <View style={{ position: "relative", top: -29 }}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="First Name" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Last Name" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email Name" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Job Title" />
          </View>

          <View style={[styles.inputContainer, { width: 100 }]}>
            <TextInput
              style={styles.input}
              placeholder="Payrate Name"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {
        //next view starts here
      }
      <View style={{ flex: 1, zIndex: 22 }}>
        <TextInput
          style={{
            backgroundColor: white,
            position: "relative",
            padding: 5,
            height: 160,
            borderRadius: 20,
            marginHorizontal: 10,
            marginTop: -55,
          }}
          placeholder="Job Desription"
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
            Create User
          </BigText>
        </MainBtn>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,

    padding: 10,
    width: 370,
    borderRadius: 10,
    backgroundColor: white,
  },
  inputContainer: {
    position: "relative",
    top: 30,
  },
});
export default CreateEmp;
