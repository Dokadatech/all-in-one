import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import NavigatorAuth from "./src/navigation/NavigatorAuth";
import { GlobalProvider, GlobalStates } from "./src/GlobalStates/GlobalContext";

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <NavigatorAuth />
      </NavigationContainer>
    </GlobalProvider>
  );
}
