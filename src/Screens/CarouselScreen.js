import React, { useState, useRef } from "react";
import { Dimensions, SafeAreaView, Text, View, StyleSheet, Animated, FlatList } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import  {
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
import slides from "../utils/slides";
import CarouselScreenItem from "./CarouselScreenItem";
const { goldish, primary } = colors;

const CarouselScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const width = Dimensions.get("window").width;
  //const { dayType, setDayType } = useState();
  //const data = ["vacation", "sick days", "grievence day"];
  return (
    <SafeAreaView>
       <View
        style={{
          borderColor: primary,
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        <View style={styles.container}>
          <View style={{flex: 3}}>
            <FlatList
            data={slides} 
            renderItem={({item}) => <CarouselScreenItem item={item}/>}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
              useNativeDriver: false, 
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
          </View>
        </View>
        <Carousel 
          loop
          width={width}
          //height={width / 1.2}
          //autoPlay={false}
          data={slides}
          // scrollAnimationDuration={10}
          onSnapToItem={(index, day) => {
            index == 0 ? (day = "Vacation") : (day = "nothing");
            index == 1 ? (day = "Sick days") : (day = "nothing");
            index == 2 ? (day = "Grievence days") : (day = "nothing");
            

            console.log("current index:", index, day);
          }}
          renderItem={({item}) => <CarouselScreenItem item={item}/>}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
              useNativeDriver: false, 
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          // renderItem={({ index, day }) => (
          //   <View
          //     style={{
          //       borderWidth: 3,
          //       justifyContent: "center",
          //     }}
          //   >
          //     <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          //   </View>
          // )}
        />

        { <BigText
          style={{
            color: primary,
            fontWeight: "bold",
            fontSize: 16,
            // textAlign: "left",
            position: "absolute",
            color: primary,
            top: 490,
            marginLeft: 10,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <RegularText
            style={{
              color: primary,
              fontWeight: "bold",
              fontSize: 16,
              color: primary,
              top: 50,
              justifyContent: "center",
            }}
          >
            Note:
          </RegularText>
          All requested day(s) off must be approved by management.
        </BigText> }
      </View>
      
      <MainBtn
        onPress={() => navigation.navigate("RequestDays")}
        style={{
          height: 57,
          position: "relative",
          backgroundColor: goldish,
          top: -380,
          marginLeft: 15,
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
      {/* <Icon /> */}
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 5, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
})

export default CarouselScreen;