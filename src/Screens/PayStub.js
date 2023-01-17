import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import Icon from "react-native-vector-icons/Ionicons";


const { primary, goldish, black, secondary2 } = colors;

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72r",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f633",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72e",
    title: "Sept 01, 2022 - Sept 15, 2022",
  },
];

// const Item = ({ title, props }) => (
//   <View style={styles.item}>
//     <Pressable onPress={() => props.navigation.navigate("SinglePaySlip")}>
//       <Text style={styles.title}>{title}</Text>
//     </Pressable>

//     <Icon
//       onPress={() => console.log("pressed arrow")}
//       style={{
//         display: "flex",
//         position: "absolute",
//         right: 10,
//       }}
//       name="download-outline"
//       color={goldish}
//       size={24}
//     />
//   </View>
// );

const PayStub = ({ navigation }) => {
  // const renderItem = ({ item }) => <Item title={item.title} />;

  const [payStubDate, setPayStubDate] = useState(
    "Sept 01, 2022 - Sept 15, 2022"
  );

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <RegularText
        style={{
          display: "flex",
          position: "absolute",
          color: black,
          top: 40,
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Payslip History
      </RegularText>

      <SmallText
        style={{
          display: "flex",
          position: "absolute",
          color: black,
          top: 100,
          fontSize: 15,
        }}
      >
        Your payslips are available and shown below. Click on the download
        button to view your pay slips for each pay period. You can view up to 18
        months of payslips history online
      </SmallText>
      <View
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
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
          Date
        </RegularText>
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
          Download
        </RegularText>
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          // extraData={selectedId}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => {
            return (
              <View style={styles.item}>
                <Pressable onPress={() => navigation.navigate("SinglePaySlip")}>
                  <Text style={styles.title}>
                    {item.id} jnonoijunoijnoojniybvuyvuyvuvu
                  </Text>
                </Pressable>

                <Icon
                  onPress={() => navigation.navigate("SinglePaySlip")}
                  style={{
                    display: "flex",
                    position: "absolute",
                    right: 10,
                  }}
                  name="download-outline"
                  color={goldish}
                  size={24}
                />
              </View>
            );
          }}
        />
      </View>

      <RegularText
        style={{
          display: "flex",
          position: "relative",
          color: primary,
          top: 260,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Contact administrator if you are unable to download or view paystub
      </RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    top: 240,
    height: 400,
  },
  item: {
    backgroundColor: secondary2,

    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 12,
    right: 85,
    position: "relative",
  },
});

export default PayStub;
