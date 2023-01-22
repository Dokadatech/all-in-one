import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { ScreenHeight, ScreenWidth } from "../components/Shared";
import styled from "styled-components/native";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import UserAvatar from "react-native-user-avatar";
import Icon from "react-native-vector-icons/Ionicons";

const { primary, secondary, secondary2, lightGrey, goldish, white, black } =
  colors;
const Profiles = () => {
  const [jobTitle, setJobTitle] = useState("Network engineer");

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: primary,
          height: 180,
        }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <UserAvatar
          size={180}
          name="Orion Bethell"
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            marginTop: -70,
            backgroundColor: goldish,
          }}
        ></UserAvatar>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
          Bethell Enterprise LTD
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#fff",
          width: "98%",
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          // shadowOpacity: 20,
          elevation: 5,
          marginTop: 20,
          height: "80%",
        }}
      >
        <View style={{ margin: 20, display: "flex", flexDirection: "row" }}>
          <Icon name="person-circle-sharp" size={20} color={secondary} />
          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            Orion Bethell
          </Text>
        </View>

        <View
          style={{
            margin: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Icon name="location" size={20} color={secondary} />

          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            New Providence, Nassau Bahamas
          </Text>
        </View>

        <View style={{ margin: 20, display: "flex", flexDirection: "row" }}>
          <Icon name="briefcase-sharp" size={20} color={secondary} />
          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            Product Designer
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profiles;
