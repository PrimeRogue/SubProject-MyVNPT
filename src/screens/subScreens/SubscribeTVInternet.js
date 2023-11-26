import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";

export default function SubscribeTVInternet({ navigation }) {
  const [tab, setTab] = useState("tab1");

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ margin: 15 }}
      >
        <Ionicons name="arrow-back-sharp" size={25} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Roboto",
          marginBottom: 10,
          marginLeft: 15,
        }}
      >
        Gói cước Internet & truyền hình
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "#fff",
          marginBottom: 50,
          marginLeft: 15,
        }}
      >
        Lắp đặt nhanh gọn, dịch vụ chu đáo
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#4889FE",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
});
