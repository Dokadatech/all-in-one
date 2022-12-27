import { View, Text } from "react-native";
import React from "react";
import CarouselScreen from "./CarouselScreen";

const AllDays = ({ navigation }) => {
  return (
    <View>
      <CarouselScreen navigation={navigation} />
    </View>
  );
};

export default AllDays;
