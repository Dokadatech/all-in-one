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
const { primary, secondary, lightGrey, goldish } = colors;

const StyledView = styled.View`
  flex: 1;
  position: absolute;
  top: 155px;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 55px;
`;

const Login = ({ navigation }) => {
  const [msg, setMsg] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  // const handleLogin = async (credentials, setSubmitting) => {
  //   const url = "/api/auth/login";
  //   try {
  //     setMsg(null);
  //     call to backend
  //     axios.post(url);
  //     const result = res.data;
  //     const { token } = result;
  //      if login successful move to next page
  //     if (!token) {
  //       setMsg("Error logging in");
  //     } else {
  //       navigation.navigate("Home", token);
  //     }
  //      after everything set submitting to false
  //     setSubmitting(false);
  //   } catch (error) {
  //     setMsg("Login Failed");
  //     setSubmitting(false);
  //     console.log(`login failed here ${error} `);
  //   }
  // };

  // const handleLogin = (credentials, setSubmitting) => {
  //   handleMessage(null);
  //   const url = "http://localhost:5000/user/signin";

  //   axios
  //     .post(url, credentials)
  //     .then((response) => {
  //       const result = response.data;
  //       const { status, message, data } = result;
  //       if (status !== "SUCCESS") {
  //         handleMessage(message, status);
  //         return console.log(`User error here ${data}`);
  //       } else {
  //         navigation.navigate("Profiles", { ...data });
  //         console.log(`Login successfull ${data}`);
  //       }
  //       setSubmitting(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setSubmitting(false);
  //       handleMessage("An error occured, Refresh and try again");
  //     });
  // };

  const handleLogin = async (credentials, setSubmitting) => {
    const url = "http://localhost:3000/api/auth/login";
    try {
      setMsg(null);
      const response = await axios.post(url, credentials);
      const result = response.data;

      const { reply, message, data, token } = result;
      // console.log(token);
      if (!token) {
        setMsg(message);
        console.log(token);
        return console.log(`User error here ${message}`);
      } else {
        navigation.navigate("FakeHome");
        // console.log(`Login successfull ${message}`);
      }
      setSubmitting(false);
    } catch (error) {
      setMsg("Login failed: " + error.message);
      console.log("Login failed: " + error.message);
      setSubmitting(false);
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
              marginTop: 45,
              marginLeft: -135,
            }}
          >
            Welcome Back
          </BigText>
          <RegularText style={{ color: secondary, marginLeft: 35 }}>
            Sign in to continue!
          </RegularText>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                setMsg("Missing information");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
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
                <StyledInput
                  label="Email"
                  placeholder="john@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />

                <StyledInput
                  label="Password"
                  placeholder="* * * * * * * * * * * * "
                  onChangeText={handleChange("password")}
                  isPassword={true}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <AccountText
                  style={{ right: -90 }}
                  onPress={() => navigation.navigate("FakeHome")}
                >
                  Forgot Password?
                </AccountText>

                <OutputMsg style={{ marginTop: 50 }} success={isSuccess}>
                  {msg || ""}
                </OutputMsg>

                {!isSubmitting && (
                  <MainBtn onPress={handleSubmit} style={{ marginTop: 20 }}>
                    Sign In
                  </MainBtn>
                )}

                {isSubmitting && (
                  <MainBtn
                    onPress={() => navigation.navigate("Signup")}
                    style={{ marginTop: 60 }}
                    disabled={true}
                  >
                    <ActivityIndicator size="small" color={primary} />
                  </MainBtn>
                )}
                <SmallText
                  style={{
                    textAlign: "center",
                    color: lightGrey,
                    marginTop: 30,
                  }}
                >
                  Don't have an account?
                </SmallText>
                <AccountText onPress={() => navigation.navigate("Signup")}>
                  Sign up
                </AccountText>
              </>
            )}
          </Formik>
        </StyledView>
      </KeyboardAvoid>
    </MainContainer>
  );
};

export default Login;
