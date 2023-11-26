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
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";

export default function Package({ navigation, route }) {
  const { name, data, chuKy, thongTin } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/packagebg.png")}
        style={{
          width: "100vw",
          height: 250,
          position: "absolute",
          top: -15,
          left: 0,
        }}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="chevron-back" size={25} color="black" />
        </TouchableOpacity>
        <View
          style={{
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 30,
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Feather name="share" size={25} color="#737A81" />

          <Text style={{ color: "#737A81" }}>Chia sẻ</Text>
        </View>
      </View>
      <View
        style={{
          marginBottom: 30,
          borderRadius: 15,
          backgroundColor: "#fff",
          padding: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#3078FE",
            marginBottom: 10,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <AntDesign name="star" size={20} color="#FE9613" />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>4.4</Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#717A81",
            paddingBottom: 10,
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: "#EBECED",
            marginBottom: 10,
          }}
        >
          47776+ lượt mua
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "40%" }}>
            {data}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "60%" }}>
            {chuKy}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 15, width: "40%", color: "#717A81" }}>
            Data
          </Text>
          <Text style={{ fontSize: 15, width: "60%", color: "#717A81" }}>
            Chu kỳ
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
        Đặc điểm nổi bật
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            image: require("../../../assets/package3.png"),
            text: "Mạng xã hội",
          },
          {
            image: require("../../../assets/package2.png"),
            text: "Tiết kiệm",
          },
          {
            image: require("../../../assets/package1.png"),
            text: "Miễn phí truy cập",
          },
        ].map((item) => (
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: "50%",
                padding: 5,
                backgroundColor: "#E9F2FF",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: 60,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                }}
              ></Image>
            </View>
            <Text style={{ fontWeight: 500, marginTop: 5, color: "#82888D" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
          padding: 15,
          gap: 10,
          borderTopWidth: 1,
          borderTopColor: "#C8CBD0",
          backgroundColor: "#fff",
          zIndex: 1000,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#C8CBD0" }}>Giá gói</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            100.000đ/tháng
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3078FE",
            borderRadius: 30,
            width: "100%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={{ fontSize: 15 }}>{thongTin}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
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
