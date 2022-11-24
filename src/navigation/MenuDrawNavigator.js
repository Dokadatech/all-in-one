import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import About from "../Screens/About";
import Logout from "../Screens/Logout";
import Help from "../Screens/Help";
import TimeScreen from "../Screens/TimeScreen";
import Notifications from "../Screens/Notifications";
import BottomTabNav from "./BottomTabNav";
import { colors } from "../components/colors";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const { secondary, primary, goldish, black, white } = colors;

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
        headerStyle: { backgroundColor: primary },
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

        drawerIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = focused ? "md-home-sharp" : "md-home-outline";
          } else if (route.name === "Timesheet") {
            iconName = focused ? "md-time-sharp" : "md-time-outline";
          } else if (route.name === "Help & Support") {
            iconName = focused
              ? "md-help-circle-sharp"
              : "md-help-circle-outline";
          } else if (route.name === "About") {
            iconName = focused
              ? "md-information-circle-sharp"
              : "md-information-circle-outline";
          }
          // else if (route.name === "Logout") {
          //   iconName = focused ? "md-receipt-sharp" : "md-receipt-outline";
          // }
          return <Icon name={iconName} size={28} color={goldish} />;
        },
      })}
    >
      <Drawer.Screen
        options={{ tabBarLabel: "BottomTabNav" }}
        name="Dashboard"
        component={BottomTabNav}
      />

      <Drawer.Screen name="Timesheet" component={TimeScreen} />
      <Drawer.Screen name="Help & Support" component={Help} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default MenuDrawNavigator;
