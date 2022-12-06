import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../components/colors";
import ForgotPassword from "../Screens/ForgotPassword";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import MenuDrawNavigator from "./MenuDrawNavigator";
const Stack = createStackNavigator();
const { platinum, primary } = colors;

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
        name="Home"
        component={MenuDrawNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default NavigatorAuth;
