import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { colors } from "../components/colors";
import MainContainer from "../components/Containers/MainContainer";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import { Card, Paragraph, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons/MaterialIcons";
import styled from "styled-components/native";
import { ScreenHeight } from "../components/Shared";
import { TouchableHighlight } from "react-native-gesture-handler";
const { primary, secondary, secondary2, goldish, white } = colors;
const StyledView = styled.View`
  position: relative;
  height: ${ScreenHeight}px;
  width: 100%;
  background-color: ${primary};
  border-radius: 55px;
`;
const AdminDashboard = ({ navigation }) => {
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

      <StyledView>
        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignSelf: "flex-start",
            position: "relative",
            top: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("AllEmployees")}>
            <Card
              style={[
                styles.allBoxes,
                styles.androidElevation,
                { borderRadius: 30 },
              ]}
            >
              <Card.Content>
                <Icon name="md-paper-plane" size={48} color={goldish} />
                <Title>All Employees</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("CreateEmp")}>
            <Card
              style={[
                styles.allBoxes,
                styles.androidElevation,
                { borderRadius: 30 },
              ]}
            >
              <Card.Content>
                <IconM name="announcement" size={48} color={goldish} />
                <Title>Create new {"\n"} Employee</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("RequestAnswer")}
          >
            <Card
              style={[
                styles.allBoxes,
                styles.androidElevation,
                { borderRadius: 30 },
              ]}
            >
              <Card.Content>
                <Icon name="md-paper-plane" size={48} color={goldish} />
                <Title>View Requests</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAnnouncement")}
          >
            <Card
              style={[
                styles.allBoxes,
                styles.androidElevation,
                { borderRadius: 30 },
              ]}
            >
              <Card.Content>
                <IconM name="announcement" size={48} color={goldish} />
                <Title>Create {"\n"} Announcement</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "relative",
            height: ScreenHeight,
            marginTop: -380,
            zIndex: -1,
            borderRadius: 30,
            backgroundColor: white,
            flex: 1,
          }}
        ></View>
      </StyledView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  allBoxes: {
    marginVertical: 30,
    height: 220,
    width: 180,
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
export default AdminDashboard;
