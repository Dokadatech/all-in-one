import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import NavigatorAuth from "./src/navigation/NavigatorAuth";
import { GlobalProvider, GlobalStates } from "./src/GlobalStates/GlobalContext";
import NotificationsService from "./src/components/Notifications_Service/NotificationsService";

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <NavigatorAuth />
        <NotificationsService />
      </NavigationContainer>
    </GlobalProvider>
  );
}
