import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import NavigatorAuth from "./src/navigation/NavigatorAuth";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <NavigatorAuth />
    </NavigationContainer>
  );
}
