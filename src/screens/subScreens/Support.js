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

export default function Support({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          height: 60,
          width: "100%",
          position: "absolute",
          top: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#EBEBEB",
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
          Hỗ trợ
        </Text>
      </View>

      <View
        style={{
          padding: 20,
          paddingTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <View style={{ gap: 5, alignItems: "center" }}>
          <Image
            source={require("../../../assets/support1.jpg")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          ></Image>
          <Text style={{ textAlign: "center" }}>Gửi yêu cầu online</Text>
        </View>
        <View style={{ gap: 5, alignItems: "center" }}>
          <Image
            source={require("../../../assets/support2.jpg")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          ></Image>
          <Text style={{ textAlign: "center" }}>
            Phản ánh chất lượng mạng lưới
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: "#1C60B2",
          paddingBottom: 20,
          paddingLeft: 30,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        Vui lòng lựa chọn dịch vụ Quý khách cần hỗ trợ
      </Text>
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        {[
          "Điện thoại di động",
          "Điện thoại cố định",
          "MyTV",
          "Home Internet",
          "Kiểm tra chất lượng Internet",
          "Yêu cầu đã gửi",
        ].map((item) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
            }}
          >
            <Text style={{ fontSize: 15 }}>{item}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={25}
              color="#848484"
            />
          </View>
        ))}
      </View>
      <Text
        style={{
          fontSize: 15,
          color: "#1C60B2",
          marginTop: 25,
          paddingBottom: 20,
          paddingLeft: 30,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        Hỗ trợ nhanh
      </Text>
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        {[
          {
            image: require("../../../assets/support1.png"),
            text: "Tổng đài di động",
          },
          {
            image: require("../../../assets/support2.png"),
            text: "Tổng đài Internet/MyTV/Cố định",
          },
          {
            image: require("../../../assets/support3.png"),
            text: "CSKH online",
          },
          {
            image: require("../../../assets/support4.png"),
            text: "CSKH toàn diện",
          },
        ].map((item) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15 }}>{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
