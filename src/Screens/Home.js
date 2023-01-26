import { View, Alert, Modal, StyleSheet, Text, Pressable } from "react-native";
import React, { useState, useContext } from "react";
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
import { GlobalStates } from "../GlobalStates/GlobalContext";
import Announcements from "../components/svg/Announcements.svg";
import Request from "../components/svg/Request.svg";



const today = new Date();
today.setDate(today.getDate() + 9);
const payDay = new Date(today).toLocaleDateString("en-US" , {month: "short", day: "2-digit"}) + (" ") + ("is your next Pay Day!");

const {
  primary,
  secondary,
  goldish,
  white,
} = colors;
const StyledView = styled.View`
  position: relative;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: ${primary};
  border-radius: 55px;
  marginTop: 5%;
`;

const Home = ({ navigation }) => {
  const {
    date,
    setDate,
    requests = 0,
    setRequests,
    announcements,
    sickDays,
    setSickDays,
    vacayDays,
    setVacayDays,
    ClockedIn,
    setClockedIn,
  } = useContext(GlobalStates);

  const createAlert = () =>
    Alert.alert(
      "Unable to clock in",
      "Must be minimum of 100 meters of office location",
      [
        {
          text: "Close",
          onPress: () => {
            console.log("Cancel Pressed");
          },
          style: "cancel",
        },
      ]
    );

  const cancelAlert = () =>
    Alert.alert("Wait!", "Are you sure you want to cancel this request", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          console.log("OK Pressed"), setRequests(0);
        },
      },
    ]);

  const isInArea = () => {
    const area = false;
    if (!area) {
      return createAlert();
    } else {
      console.log("Clocked in");
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [requestModalVisible, setRequestModalVisible] = useState(false);

  return (
    <MainContainer style={{ flex: 0.5, backgroundColor: primary }}>
      <BigText
        style={{
          color: white,
          fontWeight: "bold",
          position: "absolute",
          left: 20,
          fontSize: 33,
          top: -10,
          letterSpacing: 1,
        }}
      >
        All In One
      </BigText>
      <SmallText
        style={{
          color: secondary,
          top: 30,
          position: "absolute",
          left: 25,
        }}
      >
        {date}
      </SmallText>
      <View
        style={{
          color: primary,
          top: 80,
          position: "absolute",
          left: 25,
          borderColor: primary,
        }}>
        <SmallText
          style={{
            color: secondary,
            top: -30,
            marginLeft: -26,
            position: "absolute",
            left: 25,
          }}>
          {payDay}
        </SmallText>
      </View>
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
          <Pressable onPress={() => navigation.navigate("AllDays")}>
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
          </Pressable>
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
          <TouchableOpacity
            onPress={() => {
              setRequestModalVisible(true);
            }}
          >
            <Card style={{ borderRadius: 30, width: 183 }}>
              <Card.Content>
                <Icon name="md-paper-plane" size={48} color={goldish} />
                <Title>Requests</Title>
                {requests < 1 ? (
                  <Paragraph>No request pending</Paragraph>
                ) : (
                  <Paragraph> {requests} request pending</Paragraph>
                )}
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Card style={{ borderRadius: 30 }}>
              <Card.Content>
                <IconM name="announcement" size={48} color={goldish} />
                <Title>Announcements</Title>
                <Paragraph>Company news</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "relative",
            height: ScreenHeight,
            marginTop: 50,
            zIndex: -1,
            borderRadius: 30,
            backgroundColor: white,
          }}
        >
          <MainBtn
            onPress={() => {
              isInArea(), setRequests(requests + 1);
            }}
            style={{
              position: "relative",
              marginTop: 140,
              height: 80,
              display: "flex",
              left: -13,
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
              {ClockedIn === true ? "Clock Out" : "Clock In"}
            </BigText>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon name="md-time-outline" size={48} color={primary} />
          </MainBtn>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Card style={{ height: 300, width: "100%" }}>
                  <Announcements style={{height: 180, width: 180, marginLeft: 80, color: primary}}></Announcements>
                  {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
                  <Card.Content
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                   {/* <Announcement style={{height: 80, width: 80}}></Announcement>  */}
                    <Title>Card Announcements</Title>
                    <Paragraph>Card content</Paragraph>
                  </Card.Content>
                </Card>
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

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={requestModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setRequestModalVisible(!requestModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Card style={{ height: 300, width: "100%" }}>
                <Request style={{height: 180, width: 180, marginLeft: 80, color: primary}}></Request>
                  {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
                  <Card.Content
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Title>Card requests</Title>
                    <Paragraph>Card content</Paragraph>
                  </Card.Content>
                </Card>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setRequestModalVisible(!requestModalVisible);
                    cancelAlert();
                  }}
                >
                  <Text style={styles.textStyle}>Cancel Request</Text>
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
  },
  modalView: {
    margin: 10,
    backgroundColor: white,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    width: "100%",
    height: "40%",
    marginTop: 20,
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
    backgroundColor: goldish,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});
export default Home;
