import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/screens/BottomTabNavigator";
import LogIn from "./src/screens/LogIn";
import Home from "./src/screens/Home";
import Telecom from "./src/screens/Telecome";
import PackOfData from "./src/screens/PackOfData";
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Screen01">
    //     <Stack.Screen
    //       name="LogIn"
    //       component={LogIn}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="BottomTabNavigator"
    //       component={BottomTabNavigator}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Home></Home>
    // <Telecom></Telecom>
    <PackOfData></PackOfData>
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
