import { View, Alert, Modal, StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import styled from "styled-components/native";
import SmallText from "../components/Texts/SmallText";
import BigText from "../components/Texts/BigText";
import { colors } from "../components/colors";
import MainBtn from "../components/Buttons/MainBtn";
import { ScreenHeight } from "../components/Shared";
import Icon from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons/MaterialIcons";
import { Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const { primary, secondary, lightGrey, goldish, white } = colors;
const StyledView = styled.View`
  position: relative;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: ${primary};
  border-radius: 55px;
`;

const Home = ({ navigation }) => {
  const [dates, setDates] = useState("Friday 2 Dec, 2022");
  const [sickDays, setSickDays] = useState("05");
  const [vacayDays, setVacayDays] = useState("10");
  const [ClockedIn, setClockedIn] = useState(false);

  const annoucments = () => {
    console.log("Annouments was pressed");
  };

  const requests = () => {
    console.log("requests was pressed");
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainContainer style={{ flex: 0.5, backgroundColor: primary }}>
      <BigText
        style={{
          color: white,
          fontWeight: "bold",
          position: "absolute",
          left: 20,
          fontSize: 33,
          letterSpacing: 1,
        }}
      >
        All In One
      </BigText>
      <SmallText
        style={{
          color: secondary,
          top: 50,
          position: "absolute",
          left: 25,
        }}
      >
        {dates}
      </SmallText>
      <StyledView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "relative",
            top: 70,
          }}
        >
          <View style={{ width: 90, position: "relative" }}>
            <BigText
              style={{
                color: secondary,
                fontWeight: "bold",
                fontSize: 60,
              }}
            >
              {sickDays}
            </BigText>
            <SmallText
              style={{
                color: white,
                top: 5,
                position: "relative",

                left: 5,
                textAlign: "auto",
              }}
            >
              sick days remaining
            </SmallText>
          </View>
          <View style={{ width: 90, position: "relative" }}>
            <BigText
              style={{
                color: secondary,
                fontWeight: "bold",

                fontSize: 60,
                letterSpacing: 1,
              }}
            >
              {vacayDays}
            </BigText>
            <SmallText
              style={{
                color: white,
                top: 5,
                position: "relative",
                left: 5,
              }}
            >
              Vacation days remaining
            </SmallText>
          </View>
          <View style={{ width: 90, position: "relative" }}>
            <BigText
              style={{
                color: secondary,
                fontWeight: "bold",

                fontSize: 60,
              }}
            >
              {">>"}
            </BigText>
            <SmallText
              style={{
                color: white,
                top: 5,
                position: "relative",
                left: 5,
              }}
            >
              View all days
            </SmallText>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            position: "relative",
            top: 120,
          }}
        >
          <TouchableOpacity onPress={requests}>
            <Card style={{ borderRadius: 30 }}>
              <Card.Content>
                <Icon name="md-paper-plane" size={48} color={goldish} />
                <Title>Requests</Title>
                <Paragraph>No request pending</Paragraph>
              </Card.Content>
              {/* <Card.Cover source={{ uri: "https://picsum.photos/50" }} /> */}
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Card style={{ borderRadius: 30 }}>
              <Card.Content>
                <IconM name="announcement" size={48} color={goldish} />
                <Title>Announcements</Title>
                <Paragraph>Company news</Paragraph>
              </Card.Content>
              {/* <Card.Cover source={{ uri: "https://picsum.photos/50" }} /> */}
            </Card>
          </TouchableOpacity>
        </View>

        <MainBtn
          style={{
            position: "relative",
            top: 260,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: 12,
          }}
        >
          <BigText
            style={{
              color: primary,
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "left",
            }}
          >
            {ClockedIn === true ? " Clock Out" : "Clock In"}
          </BigText>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon name="md-time-outline" size={48} color={primary} />
        </MainBtn>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Annoucments!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </StyledView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "90%",
    height: "40%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Home;
