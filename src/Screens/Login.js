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
const { primary, secondary, lightGrey } = colors;

const StyledView = styled.View`
  flex: 1;
  position: relative;
  top: 100px;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 55px;
`;

const Login = ({ navigation }) => {
  const [msg, setMsg] = useState();

  const [messageType, setMessageType] = useState();

  // const handleLogin = async (credentials, setSubmitting) => {
  //   setMsg(null);
  //   const url = "http://localhost:3000/api/auth";
  //   try {
  //     const response = await axios.post(url, credentials);
  //     const result = response.data;
  //     console.log(result);
  //     const { status, token, message } = result;
  //     if (status !== "SUCCESS") {
  //       handleMessage("Invalid Credentials", status);
  //       console.log(message);
  //     } else {
  //       navigation.navigate("Home", { token });
  //       console.log(`Login successfull `);
  //     }
  //     // setSubmitting(false);
  //   } catch (error) {
  //     setSubmitting(false);
  //     // handleMessage(error.message);
  //     console.log("Login failed: " + error.message);
  //   }
  // };

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "http://localhost:3000/api/auth";
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, token } = result;
        console.log(result);
        if (status !== "SUCCESS") {
          handleMessage(message, status);
          console.log("ERROR HERE!");
          handleMessage("Invalid Credentials, Please try again", status);
        } else {
          navigation.navigate("Home", { token });
          console.log(`Login successfull `);
        }
        setSubmitting(false);
      })
      .catch((err) => {
        handleMessage("An error occured, Refresh and try again: ", err.message);
        // console.log(err.message);
        setSubmitting(false);
      });
  };
  /***
   * This method handles the error or success messages
   */
  const handleMessage = (message, type = "FAILED") => {
    setMsg(message);
    setMessageType(type);
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
                setMsg("Please enter a valid email and password");
                setSubmitting(false);
              } else {
                navigation.navigate("Home");
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
                  onPress={() => navigation.navigate("AdminDashboard")}
                >
                  Forgot Password?
                </AccountText>

                <OutputMsg style={{ marginTop: 5 }} type={messageType}>
                  {msg}
                </OutputMsg>

                {!isSubmitting && (
                  <MainBtn onPress={handleSubmit} style={{ marginTop: 20 }}>
                    Login
                  </MainBtn>
                )}

                {isSubmitting && (
                  <MainBtn style={{ marginTop: 60 }} disabled={true}>
                    <ActivityIndicator
                      size="small"
                      color={primary}
                      style={{ alignItems: "flex-end" }}
                    />
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
                <AccountText onPress={() => navigation.navigate("Contact")}>
                  Contact Us
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
