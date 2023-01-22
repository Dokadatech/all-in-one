import { View, Text } from "react-native";
import * as Notifications from "expo-notifications";
import React, { useEffect, useRef } from "react";
import * as Permissions from "expo-permissions";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
  }),
});
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
  }),
});

const NotificationsService = () => {
  const notificationListener = useRef();
  const responseListener = useRef();
  // useEffect(() => {
  //   registerForPushNotificationsAsync();
  // }, []);

  // useEffect(() => {
  //   // Get a token
  //   registerForPushNotificationsAsync().then((token) => {
  //     console.log(token), expoPushTokensApi.register(token);
  //   });

  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       console.log("--- notification received ---");
  //       console.log(notification);
  //       console.log("------");
  //     });

  //   // This listener is fired whenever a user taps on or interacts with a notification
  //   // (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log("--- notification tapped ---");
  //       console.log(response);
  //       console.log("------");
  //     });

  //   // Unsubscribe from events
  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    return token;
  }

  return <View></View>;
};

export default NotificationsService;
