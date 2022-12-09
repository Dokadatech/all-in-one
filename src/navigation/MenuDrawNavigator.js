import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import About from "../Screens/About";
import Logout from "../Screens/Logout";
import Help from "../Screens/Help";
import TimeScreen from "../Screens/TimeSheets";
import Notifications from "../Screens/Notifications";
import BottomTabNav from "./BottomTabNav";
import { colors } from "../components/colors";
import Icon from "react-native-vector-icons/Ionicons";
import logout from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();
const { secondary, primary, goldish, black, white } = colors;
/**
 *
 * TODO: need to fix navigation for home screen in draw, when dashboad is selected it show go to dashboard
 *
 */
const MenuDrawNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerInactiveTintColor: primary,
        drawerActiveTintColor: primary,
        drawerActiveBackgroundColor: secondary,
        drawerAllowFontScaling: true,
        headerTintColor: goldish,
        drawerPosition: "left",
        headerStyle: {
          backgroundColor: primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        drawerStyle: {
          backgroundColor: white,
          width: 240,
        },

        drawerType: dimensions.width >= 768 ? "permanent" : "slide",
        drawerType: "slide",

        headerTitle: "",
        drawerPosition: "left",
        headerLeft: false,
        headerRight: () => <DrawerToggleButton tintColor={goldish} />,

        drawerIcon: ({ focused }) => {
          let iconName;
          let iconName2;
          if (route.name === "Dashboard") {
            iconName = focused ? "md-home-sharp" : "md-home-outline";
          } else if (route.name === "Timesheet") {
            iconName = focused ? "reader-outline" : "reader-outline";
          } else if (route.name === "Help & Support") {
            iconName = focused ? "help-buoy-sharp" : "help-buoy-outline";
          } else if (route.name === "About") {
            iconName = focused
              ? "md-information-circle-sharp"
              : "md-information-circle-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "log-out-outline" : "log-out-outline";
          }
          return <Icon name={iconName} size={28} color={goldish} />;
        },
      })}
    >
      <Drawer.Screen
        options={{ tabBarLabel: "BottomTabNav" }}
        name="Dashboard"
        component={BottomTabNav}
      />
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen name="Timesheet" component={TimeScreen} />
      <Drawer.Screen name="Help & Support" component={Help} />
      <Drawer.Screen name="About" component={About} />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        style={{ position: "absolute", top: 30 }}
      />
    </Drawer.Navigator>
  );
};

export default MenuDrawNavigator;
