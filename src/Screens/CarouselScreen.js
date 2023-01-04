import React, { useState } from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/Ionicons";
import MainBtn from "../components/Buttons/MainBtn";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";

const { goldish, primary } = colors;

const CarouselScreen = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const { dayType, setDayType } = useState();
  const data = ["vacation", "sick days", "grievence day"];
  return (
    <SafeAreaView>
      <View
        style={{
          borderColor: "red",
          borderWidth: 5,
          borderStyle: "solid",
        }}
      >
        <Carousel
          loop
          width={width}
          height={width / 1.2}
          autoPlay={false}
          data={[...new Array(4).keys()]}
          // scrollAnimationDuration={10}
          onSnapToItem={(index, day) => {
            index == 0 ? (day = "Vacation") : (day = "nothing");
            index == 1 ? (day = "Sick days") : (day = "nothing");
            index == 2 ? (day = "Grievence days") : (day = "nothing");

            console.log("current index:", index, day);
          }}
          renderItem={({ index, day }) => (
            <View
              style={{
                borderWidth: 3,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />

        <BigText
          style={{
            color: primary,
            // fontWeight: "bold",
            fontSize: 20,
            // textAlign: "left",
            position: "absolute",
            color: primary,
            top: 450,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <RegularText
            style={{
              color: primary,
              fontWeight: "bold",
              fontSize: 20,
              color: primary,
              top: 400,
              justifyContent: "center",
            }}
          >
            Note:
          </RegularText>
          All requested day(s) off must be approved by management.
        </BigText>
      </View>

      <MainBtn
        onPress={() => navigation.navigate("RequestDays")}
        style={{
          height: 57,
          position: "relative",
          backgroundColor: goldish,
          top: 310,
        }}
      >
        <BigText
          style={{
            color: primary,
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "left",
          }}
        >
          Create new request
        </BigText>
      </MainBtn>
      <Icon />
    </SafeAreaView>
  );
};

export default CarouselScreen;
