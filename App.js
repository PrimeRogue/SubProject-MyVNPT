import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./src/screens/mainScreens/LogIn";
import BottomTabNavigator from "./src/screens/mainScreens/BottomTabNavigator";
import BuyPhoneSim from "./src/screens/subScreens/BuyPhoneSim";
import ChangePhoneNumber from "./src/screens/subScreens/ChangePhoneNumber";
import Notification from "./src/screens/subScreens/Notification";
import CheckOrder from "./src/screens/subScreens/CheckOrder";
import SubscribeTVInternet from "./src/screens/subScreens/SubscribeTVInternet";
import Support from "./src/screens/subScreens/Support";
import Setting from "./src/screens/subScreens/Setting";
import Personal from "./src/screens/mainScreens/Personal";
import Recharge from "./src/screens/subScreens/Recharge";
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
        <Stack.Screen
          name="ChangePhoneNumber"
          component={ChangePhoneNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckOrder"
          component={CheckOrder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recharge"
          component={Recharge}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <BuyPhoneSim></BuyPhoneSim>
    // <CheckOrder></CheckOrder>
    // <BottomTabNavigator></BottomTabNavigator>
    // <Recharge></Recharge>
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
