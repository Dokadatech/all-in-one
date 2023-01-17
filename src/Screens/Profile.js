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
// import Realm from "realm";


// export const USERLIST_SCHEMA = "UserList";
// export const USER_SCHEMA = "User";


// export const UserScheme = {
//     name: USER_SCHEMA,
//     primaryKey: "id",
//     properties: {
//       id: 'int',
//       firstName: {type: 'string', indexed: true},
//       lastName: {type: 'string', indexed: true},
//       address: {type: 'string', default: false},
//       jobDescription: {type: 'string', default: false}
//     }
// };

// export const queryUsers = () => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm =>{
//     let userList = realm.objects(USER_SCHEMA);
//     resolve.userList;
//   }).catch((error) => {
//     reject(error);
//   })
// })




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
          height: 150,
        }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <UserAvatar
          size={100}
          name="Orion Bethell"
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            marginTop: -70,
            backgroundColor: goldish,
          }}
        ></UserAvatar>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
          Bethell Enterprise LTD
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: primary }}>
          23, Male
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
          // height: "50%",
        }}
      >
        <View style={{ margin: 20 }}>
          <Image
            source={require("../../assets/person.png")}
            style={{ width: 25, height: 25 }}
          ></Image>
          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Orion Bethell
          </Text>
        </View>

        {/* </View>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#fff",
          width: "98%",
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20,
        }}
      > */}
        <View style={{ margin: 20, justifyContent: "center" }}>
          <Image
            source={require("../../assets/location.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            New Providence, Nassau Bahamas
          </Text>
        </View>
        {/* </View>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#fff",
          width: "98%",
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20,
        }}
      > */}
        <View style={{ margin: 20 }}>
          <Image
            source={require("../../assets/briefcase.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <Text
            style={{
              fontSize: 15,
              color: primary,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Product Designer
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#fff",
          width: "98%",
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20,
          marginBottom: 40,
          backgroundColor: "#000",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity> */}

      {/* <View
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
                Lorem ipsum dolor sit amet. Sed repellendus quisquam in dolorem
                t corrupti voluptate ex nisi natus At sapiente error aut iusto
                quos ut optio consequ
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default Profiles;
