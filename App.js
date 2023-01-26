import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import { Alert, AsyncStorage } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorAuth from "./src/navigation/NavigatorAuth";
import { GlobalProvider, GlobalStates } from "./src/GlobalStates/GlobalContext";
import * as Notifications from 'expo-notifications';


// import NotificationsService from "./src/components/Notifications_Service/NotificationsService";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, 
    shouldPlaySound: true, 
    shouldSetBadge: true,
  })
})
export default function App() {
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
    });
  
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  
    return unsubscribe;
  
  }, [])

  return (
    <GlobalProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <NavigatorAuth />
        {/* <NotificationsService /> */}
      </NavigationContainer>
    </GlobalProvider> 
  );
}
