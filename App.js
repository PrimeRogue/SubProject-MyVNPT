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
import Package from "./src/screens/subScreens/Package";
import SearchPackage from "./src/screens/subScreens/SearchPackage";
const Stack = createStackNavigator();
const screenComponents = {
  LogIn,
  Notification,
  BottomTabNavigator,
  BuyPhoneSim,
  ChangePhoneNumber,
  CheckOrder,
  Support,
  Setting,
  Recharge,
  Package,
  SearchPackage,
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        {Object.keys(screenComponents).map((screenName) => (
          <Stack.Screen
            key={screenName}
            name={screenName}
            component={screenComponents[screenName]}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
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
