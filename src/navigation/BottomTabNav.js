import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PayStub from "../Screens/PayStub";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../components/colors";
import Notifications from "../Screens/Notifications";

const Tab = createBottomTabNavigator();
const { goldish } = colors;

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: goldish,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = focused ? "md-home-sharp" : "md-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person-sharp" : "md-person-outline";
          } else if (route.name === "Notifications") {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === "PayStub") {
            iconName = focused ? "md-receipt-sharp" : "md-receipt-outline";
          }
          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PayStub" component={PayStub} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
export default BottomTabNav;
