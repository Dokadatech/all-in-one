import { View, Text, FlatList, StyleSheet, SafeAreaView, Alert } from "react-native";
import React, {useEffect, useState} from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenHeight } from "../components/Shared";
import messaging from "@react-native-firebase/messaging";
import moment from 'moment';
//import { NavigationContainer } from "@react-navigation/native";
//import NavigatorAuth from "./src/navigation/NavigatorAuth";
//import { GlobalProvider, GlobalStates } from "./src/GlobalStates/GlobalContext";
import * as Notifications from 'expo-notifications';
import { FirebaseData } from "./FirebaseData";


const { primary, secondary, lightGrey, goldish, white, black, secondary2 } =
  colors;


// import NotificationsService from "./src/components/Notifications_Service/NotificationsService";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, 
    shouldPlaySound: true, 
    shouldSetBadge: true,
  })
})

export default function App() {
  const [notification, setNotification] = 
  useState({title: undefined, body: undefined, sentTime: Date()});


  let sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = 
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
  }
  
  useEffect(() => {
    if (requestUserPermission()){
      //request fcm token for the device
      messaging().getToken().then(token => {
        console.log(token);
      });
    }
    else{
      console.log("Failed token status", authStatus)
    }
    // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
  
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp( async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
      })
    });
  
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
      })
    });
  
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      <View>
        <Text></Text>
      </View>
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
      })
    });
  
    return unsubscribe;
  
  }, []);

  return (
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
             data={notification.body}
             // // extraData={selectedId}
             // renderItem={renderItem}
             renderItem={item => (<Text style={styles.item}>{`${notification.title}\n${notification.body}\n${sentTime}`}</Text>)}
           />
         </View>
    </View>
    // <SafeAreaView>
    //   <View style={{ flex: 1, marginHorizontal: 15 }}>
    //     <Icon
    //       name="md-notifications-outline"
    //       color={goldish}
    //       size={28}
    //       style={{ display: "flex", position: "absolute", top: 40 }}
    //     />
    //     <RegularText
    //       style={{
    //         display: "flex",
    //         position: "absolute",
    //         color: black,
    //         top: 40,
    //         left: 40,
    //         fontWeight: "bold",
    //         fontSize: 25,
    //       }}
    //     >
    //       Notifications
    //     </RegularText>
    //     <View>
    //     <Text>{`title: ${notfication.title}`}</Text>
    //     </View>
        
        

    //     <View style={styles.container}>
    //       <FlatList
    //         data={notfication}
    //         // // extraData={selectedId}
    //         // renderItem={renderItem}
    //         renderItem={item => (<Text>{`${notfication?.title}`}</Text>)}
    //         keyExtractor = {item => item.id} 
    //       />
    //       <Text>{`${notfication.title}`}</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}
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
    fontSize: 14,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    justifyContent: "center",
    height: 70,
    top: -10,
    marginTop: 20,
    position: "relative"
    // alignItems: "left",
  },
  title: {
    fontSize: 12,

    position: "relative",
  },
});


  


// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "Your vaction request have been approved",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Your latest paystub is here ",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72r",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f633",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72e",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba33",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6334",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d7235",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baw36",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63e37",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72r38",
//     title: "Three days away from your next payday",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba239",
//     title: "Sept 01, 2022 - Sept 15, 2022",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63340",
//     title: "Sept 01, 2022 - Sept 15, 2022",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72e41",
//     title: "Sept 01, 2022 - Sept 15, 2022",
//   },
// ];



// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text onPress={() => console.log("pressed times")} style={styles.title}>
//       {title !== null ? title : "No new notifcations"}
//     </Text>
//   </View>
// );

// const Notifications = () => {
//   const renderItem = ({ item }) => <Item title={item.title} />;
//   return (
//     <SafeAreaView>
//       <View style={{ flex: 1, marginHorizontal: 15 }}>
//         <Icon
//           name="md-notifications-outline"
//           color={goldish}
//           size={28}
//           style={{ display: "flex", position: "absolute", top: 40 }}
//         />
//         <RegularText
//           style={{
//             display: "flex",
//             position: "absolute",
//             color: black,
//             top: 40,
//             left: 40,
//             fontWeight: "bold",
//             fontSize: 25,
//           }}
//         >
//           Notifications
//         </RegularText>

//         <View style={styles.container}>
//           <FlatList
//             data={DATA}
//             // extraData={selectedId}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };


// export default Notifications;
