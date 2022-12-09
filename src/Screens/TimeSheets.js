import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MainBtn from "../components/Buttons/MainBtn";
import BigText from "../components/Texts/BigText";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../components/colors";
import { ScreenHeight } from "../components/Shared";
import RegularText from "../components/Texts/RegularText";

const { primary, secondary, lightGrey, goldish, white, secondary2, black } =
  colors;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Your vaction request have been approved",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Your latest paystub is here ",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
    title: "Three days away from your next payday",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72r",
    title: "Three days away from your next payday",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
    title: "Three days away from your next payday",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f633",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72e",
    title: "Three days away from your next payday",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba33",
    title: "Three days away from your next payday",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6334",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7235",
    title: "Three days away from your next payday",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw36",
    title: "Three days away from your next payday",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e37",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72r38",
    title: "Three days away from your next payday",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba239",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63340",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72e41",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e57",
    title: "Three days away from your next payday",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72r58",
    title: "Three days away from your next payday",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba259",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63360",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72e61",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text onPress={() => console.log("pressed times")} style={styles.title}>
      {title}
    </Text>
  </View>
);

const TimeScreen = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [ClockedIn, setClockedIn] = useState(false);

  const createAlert = () =>
    Alert.alert(
      "Unable to clock in",
      "Must be minimum of 100 meters of office location",
      [
        {
          text: "Close",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );

  const isInArea = () => {
    const area = false;
    if (!area) {
      return createAlert();
    } else {
      console.log("Clocked in");
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: primary,
        backgroundColor: primary,
      }}
    >
      <View>
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
        <MainBtn
          onPress={() => isInArea()}
          style={{
            position: "relative",
            marginTop: 100,
            height: 80,
            display: "flex",
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
            {ClockedIn === true ? "Clock Out" : "Clock In"}
          </BigText>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon name="md-time-outline" size={48} color={primary} />
        </MainBtn>
      </View>
      <View
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginHorizontal: 16,
          padding: 10,
          top: 80,
          zIndex: 22,
        }}
      >
        <RegularText
          style={{
            display: "flex",
            position: "relative",
            color: black,
            top: 200,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Pay Period
        </RegularText>
        <RegularText
          style={{
            display: "flex",
            position: "relative",
            color: black,
            top: 200,
            fontSize: 15,
            fontWeight: "bold",
            right: 30,
          }}
        >
          Hours
        </RegularText>
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          // extraData={selectedId}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    justifyContent: "space-between",
    top: 90,
    height: ScreenHeight,
    paddingTop: 40,
  },
  item: {
    backgroundColor: secondary2,

    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    justifyContent: "center",
    // alignItems: "left",
  },
  title: {
    fontSize: 12,

    position: "relative",
  },
});
export default TimeScreen;
