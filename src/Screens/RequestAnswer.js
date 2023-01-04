import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import RegularText from "../components/Texts/RegularText";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import KeyboardAvoid from "../components/Containers/KeyboardAvoid";

const { primary, white, goldish, secondary2, secondary, lightGrey } = colors;
const RequestAnswer = () => {
  const [reasonInput, setReasonInput] = useState();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoid>
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
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 70,
              paddingHorizontal: 30,
            }}
          >
            <RegularText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              Sept 01 2022
            </RegularText>
            <SmallText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              -To-
            </SmallText>
            <RegularText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              Sept 10 2022
            </RegularText>
          </View>

          <View
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 70,
              paddingHorizontal: 20,
              borderBottomColor: lightGrey,
              borderBotomWidth: 3,
            }}
          >
            <RegularText
              style={{
                color: white,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              From Employee:
            </RegularText>
            <RegularText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              John Russell
            </RegularText>
          </View>

          <View
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
              paddingHorizontal: 20,
              borderBottomColor: lightGrey,
              borderBotomWidth: 3,
              // height: 40,
            }}
          >
            <RegularText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              Request Type:{" "}
            </RegularText>
            <RegularText
              style={{ color: white, fontSize: 20, fontWeight: "bold" }}
            >
              Vacation
            </RegularText>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            zIndex: 22,
            width: "100%",
            alignItems: "center",
            display: "flex",
            // backgroundColor: "red",
          }}
        >
          <View style={{ position: "relative", top: -60, width: "90%" }}>
            <TextInput
              style={[
                styles.allBoxes,
                styles.androidElevation,
                {
                  backgroundColor: white,
                  position: "relative",
                  height: 160,
                  borderRadius: 20,
                  padding: 5,
                },
              ]}
              onChangeText={setReasonInput}
              value={reasonInput}
            />
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: 30,
            }}
          >
            <MainBtn
              onPress={() => {
                console.log("Submit");
                //  navigation.navigate("RequestDays")
              }}
              style={{
                height: 57,
                position: "relative",
                backgroundColor: secondary,
                // top: 200,
                width: 140,
              }}
            >
              <BigText
                style={{
                  color: white,
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Deny
              </BigText>
            </MainBtn>

            <MainBtn
              onPress={() => {
                console.log("Submit");
                //  navigation.navigate("RequestDays")
              }}
              style={{
                height: 57,
                position: "relative",
                backgroundColor: goldish,
                // top: 100,
                width: 140,
              }}
            >
              <BigText
                style={{
                  color: primary,
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Approve
              </BigText>
            </MainBtn>
          </View>
        </View>
      </KeyboardAvoid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  allBoxes: {
    shadowColor: secondary2,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: secondary2,
    borderWidth: 0.5,
  },
  androidElevation: {
    elevation: 20,
    shadowColor: secondary2,
  },
});

export default RequestAnswer;
