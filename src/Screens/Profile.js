import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { ScreenHeight, ScreenWidth } from "../components/Shared";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
const { primary, secondary, lightGrey, goldish, white, black } = colors;

const Profiles = () => {
  const [jobTitle, setJobTitle] = useState("Network engineer");

  return (
    <View
      style={{
        display: "flex",
        position: "absolute",
        width: ScreenWidth,
      }}
    >
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Card
          style={{
            display: "flex",
            width: ScreenWidth,
            position: "relative",
          }}
        >
          <RegularText
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              // position: "absolute",
              color: black,
              // top: 80,
              fontWeight: "bold",
              // fontSize: 25,
            }}
          >
            {jobTitle} at Bethell's Enterprise LTD
          </RegularText>
          <RegularText
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              // position: "absolute",
              color: black,
              // top: 80,
              fontWeight: "bold",
              // fontSize: 25,
            }}
          >
            Nassau, Bahamas
          </RegularText>
          <Card.Content>
            <Paragraph
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RegularText
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Job Description:{" "}
              </RegularText>
              Lorem ipsum dolor sit amet. Sed repellendus quisquam in dolorem t
              corrupti voluptate ex nisi natus At sapiente error aut iusto quos
              ut optio consequ
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default Profiles;
