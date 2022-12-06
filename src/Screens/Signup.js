import { ActivityIndicator } from "react-native";
import React, { useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import KeyboardAvoid from "../components/Containers/KeyboardAvoid";
import styled from "styled-components/native";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import { ScreenHeight } from "../components/Shared";
import { colors } from "../components/colors";
import StyledInput from "../components/Inputs/StyledInput";
import { Formik } from "formik";
import MainBtn from "../components/Buttons/MainBtn";

import OutputMsg from "../components/Texts/OutputMsg";
import AccountText from "../components/Texts/AccoutText";
import axios from "axios";
import { Alert } from "react-native";
const { primary, secondary, lightGrey } = colors;

const StyledView = styled.View`
  flex: 1;
  position: relative;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 55px;
`;

const Signup = ({ navigation }) => {
  const [msg, setMsg] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const handleSignup = async (credentials, setSubmitting) => {
    const url = "http://localhost:3000/api/auth/register";
    try {
      setMsg(null);
      //call to backend
      const response = await axios.post(url, credentials);
      const result = response.data;
      const { reply, data, message } = result;
      // const moreData = response.config;
      // const { email } = moreData;
      // console.log(email);
      console.log(response);
      if (reply !== "SUCCESS") {
        setMsg("User already exists");
        console.log(reply);

        return;
      } else {
        Alert.alert(
          "Registration Successful",
          response.message,
          navigation.navigate("Login", { ...data }),
          { cancelable: false }
        );
      }
      console.log(data + reply);
      setSubmitting(false);
    } catch (error) {
      setMsg("Signup Failed");
      setSubmitting(false);
      console.log(`Signup failed here ${error} `);
    }
  };

  return (
    <MainContainer>
      <KeyboardAvoid>
        <StyledView>
          <BigText
            style={{
              color: secondary,
              fontWeight: "bold",
              marginTop: 35,
              marginLeft: -220,
            }}
          >
            Hi There
          </BigText>
          <RegularText style={{ color: secondary, marginLeft: 35 }}>
            Sign up to continue!
          </RegularText>

          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              confirmPassword: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.username == "" ||
                values.email == "" ||
                values.password == "" ||
                values.confirmPassword == ""
              ) {
                setMsg("Missing information");
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                setMsg("Passwords must match");
                setSubmitting(false);
              } else if (values.password.length <= 8) {
                setMsg("Passwords must be greater than 8 characters");
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
                values.email = "";
                values.password = "";
                values.confirmPassword = "";
                values.username = "";
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
                <StyledInput
                  label="Username"
                  placeholder="john2022"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  style={{ marginBottom: -15 }}
                />
                <StyledInput
                  label="Email"
                  placeholder="john@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={{ marginBottom: -15 }}
                />

                <StyledInput
                  label="Password"
                  placeholder="* * * * * * * * * * * * "
                  onChangeText={handleChange("password")}
                  isPassword={true}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  style={{ marginBottom: -15 }}
                />

                <StyledInput
                  label="Confirm Password"
                  placeholder="* * * * * * * * * * * * "
                  onChangeText={handleChange("confirmPassword")}
                  isPassword={true}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                />

                <OutputMsg style={{ marginTop: 30 }} success={isSuccess}>
                  {msg || ""}
                </OutputMsg>

                {!isSubmitting && (
                  <MainBtn
                    onPress={handleSubmit}
                    style={{ marginTop: 5, marginBottom: 20 }}
                  >
                    Sign up
                  </MainBtn>
                )}
                {/*  */}
                {isSubmitting && (
                  <MainBtn
                    onPress={() => navigation.navigate("Signup")}
                    style={{ marginTop: 5 }}
                    disabled={true}
                  >
                    <ActivityIndicator size="small" color={primary} />
                  </MainBtn>
                )}

                <SmallText
                  style={{
                    textAlign: "center",
                    color: lightGrey,
                    marginTop: 20,
                  }}
                >
                  Already have an account?
                </SmallText>
                <AccountText onPress={() => navigation.navigate("Login")}>
                  Sign in
                </AccountText>
              </>
            )}
          </Formik>
        </StyledView>
      </KeyboardAvoid>
    </MainContainer>
  );
};

export default Signup;
