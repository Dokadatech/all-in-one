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
import logo from "../components/images/lock_icon.svg";

import OutputMsg from "../components/Texts/OutputMsg";

const { primary, white } = colors;

const ImageView = styled.Image`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  padding-top: 30px;
  margin-bottom: 20px;
  background: #4fc6f0;
`;
const StyledView = styled.View`
  flex: 1;
  position: relative;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 55px;
`;

const ForgotPassword = ({ navigation }) => {
  const [msg, setMsg] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = async (credentials, setSubmitting) => {
    try {
      setMsg(null);
      //call to backend

      // if login successful move to next page

      // after everything set submitting to false

      setSubmitting(false);
    } catch (error) {
      setMsg("Login Failed");
      setSubmitting(false);
      console.log(`login failed here ${error} `);
    }
  };
  return (
    <KeyboardAvoid>
      <MainContainer>
        {/* <ImageView source={logo} /> */}
        <RegularText
          style={{ color: white, paddingTop: 20, textAlign: "center" }}
        >
          Enter email address
        </RegularText>

        <RegularText
          style={{
            color: white,
            paddingTop: 20,
            paddingBottom: 60,
            textAlign: "center",
          }}
        >
          We will send you an email with futher instructions to reset your
          password
        </RegularText>
        <StyledView>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "") {
                setMsg("Please enter your email address");
                setSubmitting(false);
              } else {
                handleSubmit(values, setSubmitting);
                setMsg(
                  "If an account exists, follow the steps to recover Account."
                );
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
                <OutputMsg style={{ marginTop: 30 }} success={isSuccess}>
                  {msg || ""}
                </OutputMsg>
                {!isSubmitting && (
                  <MainBtn onPress={handleSubmit}>Submit</MainBtn>
                )}
                {isSubmitting && (
                  <MainBtn disabled={true}>
                    <ActivityIndicator size="small" color={primary} />
                  </MainBtn>
                )}
              </>
            )}
          </Formik>
        </StyledView>
      </MainContainer>
    </KeyboardAvoid>
  );
};

export default ForgotPassword;
