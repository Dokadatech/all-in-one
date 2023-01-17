import { View, Text, FlatList, StyleSheet, SafeAreaView, Platform } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenHeight } from "../components/Shared";
import * as Notifications from 'expo-notifications';
import storage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";


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

Notifications.setNotificationHandler ({
  handleNotification: async () => ({
    shouldShowAlert: true, 
    shouldPlaySound: true, 
    shouldSetBadge: true
  })
});

const Notification = () => {
  const [notifcation, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  let not = "";

  useEffect(() => {
    const getPermission = async () => {
      if (Constants.isDevice) {
        const {status: existingStatus} = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus; 
        if(existingStatus !== 'granted') {
          const {status} = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted'){
          alert('Enable push notifications to use the app!');
          await storage.setItem('expopushtoken', "");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem('expopushtoken', token);
      }else {
        alert('Must use physical device for Push Notifications');
      }
  
      if (Platform.OS === 'android'){
        Notifications.setNotificationChannelAsync('default', {
          name: 'default', 
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    }
    getPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener(notifcation => {
      setNotification(notifcation);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(respone => {});

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);

      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, 
  []);

  const OnClick = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "All In One", 
        body: "Three days away from your next payday",
        data: {data: "data goes here"}
      }, 
      trigger: { 
        seconds: 9
      }
    });
  }

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
          <TouchableOpacity onPress={OnClick}>
          <FlatList
            data={DATA}
            // extraData={selectedId}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          </TouchableOpacity>
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

export default Notification;
