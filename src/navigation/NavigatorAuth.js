import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../components/colors";
import AllDays from "../Screens/AllDays";
import RequestDays from "../Screens/RequestDays";
import ForgotPassword from "../Screens/ForgotPassword";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import MenuDrawNavigator from "./MenuDrawNavigator";
import SinglePaySlip from "../Screens/SinglePaySlip";
import Help from "../Screens/Help";
import AdminDashboard from "../Screens/AdminDashboard";
import CreateAnnouncement from "../Screens/CreateAnnouncement";
import RequestAnswer from "../Screens/RequestAnswer";
import CreateEmp from "../Screens/CreateEmp";
import AllEmployees from "../Screens/AllEmployees";
import Contact from "../Screens/Contact";
const Stack = createStackNavigator();
const { platinum, primary, white, black } = colors;

const NavigatorAuth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: primary,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      initialRouteName={{ Login }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
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
        name="Home"
        component={MenuDrawNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllDays"
        component={AllDays}
        options={{
          title: "All Days",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="RequestDays"
        component={RequestDays}
        options={{
          title: "Request Days",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SinglePaySlip"
        component={SinglePaySlip}
        options={{
          title: "All Payslip ",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          title: "Help & Support",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{
          title: "Admin Dashboard",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="CreateEmp"
        component={CreateEmp}
        options={{
          title: "Create New Employee",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="CreateAnnouncement"
        component={CreateAnnouncement}
        options={{
          title: "Create Announcement",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="RequestAnswer"
        component={RequestAnswer}
        options={{
          title: "Time off Request",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AllEmployees"
        component={AllEmployees}
        options={{
          title: "All Employees",
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default NavigatorAuth;
