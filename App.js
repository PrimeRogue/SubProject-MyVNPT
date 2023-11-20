import { StyleSheet, Text, View } from "react-native";
import Screen01 from "./src/screens/Screen01";
import Navigation from "./src/components/Navigation";
import Screen02 from "./src/screens/Screen02";

export default function App() {
  return <Screen02></Screen02>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
