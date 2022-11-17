import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "./src/components/colors";
import ForgotPassword from "./src/Screens/ForgotPassword";
import BottomTab from "./src/Screens/BottomTab";
import Home from "./src/Screens/Home";
import FakeHome from "./src/Screens/FakeHome";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";

const { platinum, primary } = colors;
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTintColor: platinum,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitleVisible: false,
            headerBackTitleStyle: {
              color: platinum,
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: "",
            headerTintColor: platinum,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "",
            headerTintColor: platinum,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="FakeHome"
          component={FakeHome}
          options={{
            title: "",
            headerTintColor: platinum,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
