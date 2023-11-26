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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

export default function Setting({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          height: 60,
          width: "100%",
          position: "absolute",
          top: 0,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ position: "absolute", left: 15 }}
        >
          <Ionicons name="arrow-back-sharp" size={25} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Cài đặt ứng dụng
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <View
          style={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fff",
            padding: 15,
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/logo.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          ></Image>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>MyVNPT</Text>
          <Text style={{ fontSize: 15, color: "#898F94" }}>
            Phiên bản: 3.2.39.Prd
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fff",
            padding: 15,
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <MaterialCommunityIcons name="web" size={25} color="#707A81" />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ngôn ngữ</Text>
          <Text style={{ fontSize: 15, alignSelf: "flex-end" }}>
            Tiếng Việt
          </Text>
        </View>
        <Text style={{ fontSize: 15, marginTop: 30, marginBottom: 0 }}>
          Bảo mật
        </Text>
        <View
          style={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fff",
            padding: 15,
            gap: 30,
            marginTop: 15,
          }}
        >
          {[
            { text: "Đổi mật khẩu", icon: "key-asterisk" },
            { text: "Xoá tài khoản", icon: "trash" },
            { text: "Điều khoản sử dụng", icon: "file" },
            { text: "Chính sách riêng tư", icon: "file" },
          ].map((item) => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Octicons name={item.icon} size={20} color="#717A7F" />
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#3B4752" }}
              >
                {item.text}
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                color="#848484"
                style={{ position: "absolute", right: 0 }}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F8F8",
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
