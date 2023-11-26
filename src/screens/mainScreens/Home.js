import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useReducer, useState, useRef } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import searchTrends from "../../datas/searchTrends";
import preferredService from "../../datas/preferredService";
import SwiperFlatList from "react-native-swiper-flatlist";
import homeSlider from "../../datas/homeSlider";
import axios from "axios";

export default function Home({ navigation, route }) {
  let { sdt } = route.params;
  let [taikhoanchinh, setTaiKhoanChinh] = useState(route.params.taikhoanchinh);
  let [taikhoankm, setTaiKhoanKM] = useState(route.params.taikhoankm);
  const scrollViewRef = useRef(null);
  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <View style={{ padding: 15 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              source={require("../../../assets/toa-nha-vnpt.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "#fff",
                borderWidth: 2,
                borderColor: "#fff",
                resizeMode: "cover",
              }}
            ></Image>
            <View style={{ gap: 5 }}>
              <Text style={{ color: "#fff" }}>Xin chào</Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>{sdt}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              style={styles.noficationButton}
              onPress={() => {
                navigation.navigate("Notification", { navigation });
              }}
            >
              <MaterialIcon name="notifications" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.noficationButton}
              onPress={() => {
                scrollViewRef.current.scrollToEnd({
                  animated: true,
                });
              }}
            >
              <MaterialIcon name="search" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.glass}>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              marginBottom: 10,
              paddingBottom: 10,
              borderBottomWidth: 2,
              borderColor: "#fff",
            }}
          >
            <Feather name="smartphone" size={15} color="black" />
            {sdt} - Thuê bao trả trước
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <View style={{ width: "50%", gap: 5 }}>
              <Text style={{ fontSize: 15 }}>Tài khoản chính</Text>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {taikhoanchinh}đ
              </Text>
            </View>
            <View style={{ width: "50%", gap: 5 }}>
              <Text style={{ fontSize: 15 }}>Tài khoản khuyến mãi</Text>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {taikhoankm}đ
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Recharge", {
                  navigation,
                  sdt,
                  setTaiKhoanChinh,
                  setTaiKhoanKM,
                })
              }
              style={{
                padding: 5,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#fff",
                gap: 3,
              }}
            >
              <MaterialIcon name="attach-money" size={20} color="#5693E9" />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Nạp tiền</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#fff",
                gap: 3,
              }}
            >
              <Feather name="database" size={20} color="#5693E9" />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Chi tiết thuê bao
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const url = "https://vnpt.com.vn/ho-tro";

                Linking.openURL(url).catch((err) =>
                  console.error("An error occurred", err)
                );
              }}
              style={{
                padding: 5,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#fff",
                gap: 3,
              }}
            >
              <Feather name="headphones" size={20} color="#5693E9" />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Hỗ trợ</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.glass}>
          <View
            style={{
              padding: 15,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              backgroundColor: "#fff",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
              >
                Mua sim Vinaphone
              </Text>
              <Text
                style={{ fontSize: 15, color: "#6B7175", marginBottom: 20 }}
              >
                Ấn tượng hơn khi chọn SIM số đẹp theo ngày sinh, số may mắn
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("BuyPhoneSim", { navigation });
                }}
                style={{
                  borderRadius: 15,
                  backgroundColor: "#3078FE",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  padding: 7,
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  Mua ngay
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../../assets/sim.jpg")}
              style={{
                width: "50%",
                height: 150,
                resizeMode: "contain",
              }}
            ></Image>
          </View>
          <View style={{ width: "100%", gap: 5, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChangePhoneNumber", { navigation });
              }}
              style={{
                flex: 4,
                borderRadius: 10,
                backgroundColor: "#fff",
                padding: 10,
                overflow: "hidden",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Chuyển mạng <br></br>giữ số
              </Text>
              <Image
                source={require("../../../assets/vinaphone.png")}
                style={{
                  width: "80%",
                  height: 150,
                  resizeMode: "contain",
                  position: "absolute",
                  right: 0,
                  bottom: -55,
                }}
              ></Image>
            </TouchableOpacity>
            <View style={{ gap: 10, flexDirection: "column", flex: 6 }}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  paddingLeft: 10,
                  paddingRight: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Đăng ký TV &<br></br>Internet
                </Text>
                <Image
                  source={require("../../../assets/smarttv.jpg")}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                  }}
                ></Image>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CheckOrder", { navigation });
                }}
                style={{
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  paddingLeft: 10,
                  paddingRight: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Tra cứu đơn<br></br>hàng
                </Text>
                <Image
                  source={require("../../../assets/smarttv.jpg")}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              paddingBottom: 2,
              borderRadius: 10,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Kích hoạt sim Vinaphone
            </Text>
            <Image
              source={require("../../../assets/sims.jpg")}
              style={{
                width: 100,
                height: 60,
                resizeMode: "contain",
              }}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.favoriteService}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Dịch vụ ưa thích
          </Text>
          <Text style={{ fontSize: 12, color: "#347DF2" }}>Xem tất cả</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
          }}
        >
          {preferredService.slice(0, 4).map((item, index) => (
            <View style={{ alignItems: "center", gap: 5 }}>
              <Image
                source={item.image}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  resizeMode: "contain",
                }}
              ></Image>
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
        <Image
          source={require("../../../assets/uudai.png")}
          style={{
            width: "100%",
            height: 170,
            marginTop: 30,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Làm nhiều hơn với MyVNPT
        </Text>
        <SwiperFlatList
          autoplay
          autoplayDelay={1}
          autoplayLoop
          index={0}
          style={{ marginTop: 10 }}
        >
          {homeSlider.map((item) => (
            <View key={item.id} style={styles.service}>
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: 190,
                  resizeMode: "contain",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              />
            </View>
          ))}
        </SwiperFlatList>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Hỗ trợ nhanh
        </Text>
        <View style={{ gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                padding: 20,
                backgroundColor: "#F5F8FD",
                borderRadius: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                flex: 5,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <OcticonsIcon name="device-mobile" size={25} color="#5693E9" />
              <Text style={{ fontSize: 15 }}>Điện thoại di động</Text>
            </View>
            <View
              style={{
                padding: 20,
                backgroundColor: "#F5F8FD",
                borderRadius: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                flex: 5,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <MaterialIcon name="wifi" size={25} color="#5693E9" />
              <Text style={{ fontSize: 15 }}>Internet</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                padding: 20,
                backgroundColor: "#F5F8FD",
                borderRadius: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                flex: 5,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <MaterialIcon name="cast" size={25} color="#5693E9" />
              <Text style={{ fontSize: 15 }}>Truyền hình MyTv</Text>
            </View>
            <View
              style={{
                padding: 20,
                backgroundColor: "#F5F8FD",
                borderRadius: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                flex: 5,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <MaterialCommunityIcons
                name="chat-question-outline"
                size={25}
                color="#5693E9"
              />
              <Text style={{ fontSize: 15 }}>Điện thoại cố định</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Xu hướng tìm kiếm
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {searchTrends.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                let name = item.name;
                let data = item.data;
                let chuKy = item.chuKy;
                let thongTin = item.thongTin;
                navigation.navigate("Package", { name, data, chuKy, thongTin });
              }}
              key={index}
              style={{
                borderRadius: 30,
                padding: 10,
                paddingTop: 12,
                paddingBottom: 12,
                backgroundColor: "#F8F8F8",
                width: "fit-content",
              }}
            >
              <Text style={{ fontSize: 18, color: "#B0B2B3" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#44B4FE",
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

  glass: {
    padding: 10,
    marginTop: 30,
    gap: 10,
    backgroundColor: "rgba(255, 255, 255, 0.63)",
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden",
  },

  favoriteService: {
    borderRadius: 10,
    width: "100vw",
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 20,
  },
  languageButtonContainer: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 5,
  },
  languageButton: {
    backgroundColor: "#34404C",
    width: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  noficationButton: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "#8FCEF6",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  utilContainer: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
  },

  serviceContainer: {
    width: "100%",
    marginTop: 15,
  },
  service: {
    height: 200,
    width: 130,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#fff",
  },
});
