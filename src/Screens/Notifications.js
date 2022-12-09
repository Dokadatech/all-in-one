import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenHeight } from "../components/Shared";

const { primary, secondary, lightGrey, goldish, white, black, secondary2 } =
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
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text onPress={() => console.log("pressed times")} style={styles.title}>
      {title !== null ? title : "No new notifcations"}
    </Text>
  </View>
);
const Notifications = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <Icon
          name="md-notifications-outline"
          color={goldish}
          size={28}
          style={{ display: "flex", position: "absolute", top: 40 }}
        />
        <RegularText
          style={{
            display: "flex",
            position: "absolute",
            color: black,
            top: 40,
            left: 40,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Notifications
        </RegularText>

        <View style={styles.container}>
          <FlatList
            data={DATA}
            // extraData={selectedId}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    top: 100,
    height: ScreenHeight,
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

export default Notifications;
