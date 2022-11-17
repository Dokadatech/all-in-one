import "react-native-gesture-handler";
import React from "react";
import Home from "./Home";
import Profiles from "./Profiles";
import Recents from "./Recents";
import Notifications from "./Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import PayStub from "./PayStub";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const FakeHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="PayStubs" component={PayStub} />
      <Tab.Screen name="Profile" component={Recents} />
      <Tab.Screen name="Menu" component={Menu} />
      {/* <Drawer.Screen name="Menu" component={Menu} /> */}
    </Tab.Navigator>
  );
};

export default FakeHome;
