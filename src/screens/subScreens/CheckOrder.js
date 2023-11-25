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

export default function CheckOrder({ navigation }) {
  const [tab, setTab] = useState("tab1");

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
          Đơn Hàng VNPT
        </Text>
      </View>

      <View style={{ flexDirection: "row", width: "100%" }}>
        <TouchableOpacity
          onPress={() => setTab("tab1")}
          style={{
            padding: 15,
            borderBottomWidth: 2,
            borderBottomColor: tab === "tab1" ? "#3476FF" : "#fff",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: tab === "tab1" ? "#3476FF" : "#A0A1A7",
            }}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("tab2")}
          style={{
            padding: 15,
            borderBottomWidth: 2,
            borderBottomColor: tab === "tab2" ? "#3476FF" : "#fff",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: tab === "tab2" ? "#3476FF" : "#A0A1A7",
            }}
          >
            Lịch sử tra cứu
          </Text>
        </TouchableOpacity>
      </View>
      {tab === "tab1" ? (
        <View>
          <View
            style={{
              backgroundColor: "#F6F9FF",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              padding: 15,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Foundation name="info" size={25} color="#478DFA" />
            <Image
              source={require("../../../assets/fase5.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15 }}>
              Là dịch vụ giúp khách hàng thanh toán các đơn hàng VinaPhone theo
              dạng trả trước 3 tháng, 6 tháng,...
            </Text>
          </View>
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: "#D9D9D9",
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../../assets/logo.png")}
              style={{
                width: "70%",
                height: "70%",
                resizeMode: "contain",
              }}
            ></Image>
          </View>
          <View
            style={{
              padding: 7,
              gap: 7,
              backgroundColor: "#F2F2F2",
              borderWidth: 1,
              borderColor: "#898E92",
              margin: 15,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: "#898E92" }}>Đơn vị</Text>
            <Text stye={{ fontSize: 15 }}>Vinaphone</Text>
          </View>
          <TextInput
            placeholder="Nhập mã đơn hàng"
            style={{
              padding: 7,
              gap: 7,
              borderWidth: 1,
              borderColor: "#898E92",
              margin: 15,
              borderRadius: 5,
              paddingTop: 15,
              paddingBottom: 15,
              marginBottom: 100,
            }}
          ></TextInput>
          <TouchableOpacity
            style={{
              width: "90%",
              borderRadius: 30,
              padding: 15,
              backgroundColor: "#4B96F8",
              justifyContent: "center",
              alignItems: "center",
              margin: 15,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Image
            source={require("../../../assets/calendar.png")}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
              borderRadius: "50%",
              alignSelf: "center",
            }}
          ></Image>
          




        </View>
      )}
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
