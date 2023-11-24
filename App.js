import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./src/screens/mainScreens/LogIn";
import Notification from "./src/screens/Notification";
import BottomTabNavigator from "./src/screens/mainScreens/BottomTabNavigator";
import BuyPhoneSim from "./src/screens/BuyPhoneSim";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuyPhoneSim"
          component={BuyPhoneSim}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <BuyPhoneSim></BuyPhoneSim>
    // <Home></Home>
    // <BottomTabNavigator></BottomTabNavigator>
    // <Personal></Personal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
