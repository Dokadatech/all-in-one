import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import NavigatorAuth from "./src/navigation/NavigatorAuth";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="light" />

        <NavigatorAuth />
      </Provider>
    </NavigationContainer>
  );
}
