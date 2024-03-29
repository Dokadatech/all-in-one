import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import KeyboardAvoid from "../components/Containers/KeyboardAvoid";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import { ScreenHeight } from "../components/Shared";
import { colors } from "../components/colors";
import StyledInput from "../components/Inputs/StyledInput";
import MainContainer from "../components/Containers/MainContainer";
import styled from "styled-components/native";
import { Formik } from "formik";
import OutputMsg from "../components/Texts/OutputMsg";
import MainBtn from "../components/Buttons/MainBtn";
import AccountText from "../components/Texts/AccoutText";
import RadioGroup from "react-native-radio-buttons-group";

const { primary, secondary, lightGrey, goldish, white, secondary2 } = colors;

const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Email",
    value: "email",
  },
  {
    id: "2",
    label: "Phone",
    value: "phone",
  },
];

const Help = ({ navigation }) => {
  const [msg, setMsg] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const radioButtonPressed = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  };

  const handleSend = () => {
    console.log("Message sent");
  };
  return (
    <KeyboardAvoid>
      <MainContainer>
        <View
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <BigText
            style={{
              fontWeight: "bold",
            }}
          >
            Admin Contact
          </BigText>
          <SmallText
            style={{
              textAlign: "center",
              color: secondary2,
              padding: 10,
            }}
          >
            Please enter your help request and your admin will contact you
            shortly
          </SmallText>
        </View>
        <View
          style={{
            backgroundColor: white,
            flex: 1,
            position: "relative",
            top: 80,
            borderRadius: 50,
          }}
        >
          <Formik
            initialValues={{ email: "", companyName: "", phone: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.email == "" ||
                values.companyName == "" ||
                values.phone == ""
              ) {
                setMsg("Missing information");
                setSubmitting(false);
              } else {
                handleSend(values, setSubmitting);
                values.email = "";
                values.password = "";
              }
            }}
          >
            {({
              handleBlur,
              handleSubmit,
              isSubmitting,
              values,
              handleChange,
            }) => (
              <>
                <TextInput
                  style={styles.textInput}
                  label="Email"
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <TextInput
                  style={styles.textInput}
                  label="Phone"
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />

                <TextInput
                  style={[styles.textInput, { height: 80, paddingTop: 55 }]}
                  label="message"
                  placeholder="Send a message"
                  keyboardType="default"
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  value={values.message}
                  multiline={true}
                />

                <OutputMsg style={{}} success={isSuccess}>
                  {msg || ""}
                </OutputMsg>

                {!isSubmitting && (
                  <MainBtn
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 50 }}
                  >
                    <RegularText
                      style={{
                        fontWeight: "bold",
                        color: white,
                        letterSpacing: 1,
                        fontSize: 20,
                      }}
                    >
                      Submit
                    </RegularText>
                  </MainBtn>
                )}

                {isSubmitting && (
                  <MainBtn
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 80 }}
                    disabled={true}
                  >
                    <ActivityIndicator size="small" color={primary} />
                  </MainBtn>
                )}
              </>
            )}
          </Formik>
        </View>
      </MainContainer>
    </KeyboardAvoid>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: lightGrey,
    borderBottomWidth: 1,
    height: 30,
    marginVertical: 30,
    marginHorizontal: 20,
  },
});

export default Help;
