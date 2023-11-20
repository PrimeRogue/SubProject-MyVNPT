import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import sliderData from "../components/sliderData";
export default function Screen02() {
  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              source={require("../../assets/toa-nha-vnpt.jpg")}
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
              <Text style={{ fontWeight: "bold", color: "#fff" }}>
                012345789
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={styles.noficationButton}>
              <Icon name="notifications" size={25} color="#fff" />
            </View>
            <View style={styles.noficationButton}>
              <Icon name="search" size={25} color="#fff" />
            </View>
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
              source={require("../../assets/sim.jpg")}
              style={{
                width: "50%",
                height: 150,
                resizeMode: "contain",
              }}
            ></Image>
          </View>
          <View style={{ width: "100%", gap: 5, flexDirection: "row" }}>
            <View
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
                source={require("../../assets/vinaphone.png")}
                style={{
                  width: "80%",
                  height: 150,
                  resizeMode: "contain",
                  position: "absolute",
                  right: 0,
                  bottom: -55,
                }}
              ></Image>
            </View>
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
                  source={require("../../assets/smarttv.jpg")}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                  }}
                ></Image>
              </View>
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
                  Tra cứu đơn<br></br>hàng
                </Text>
                <Image
                  source={require("../../assets/smarttv.jpg")}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                  }}
                ></Image>
              </View>
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
              source={require("../../assets/sims.jpg")}
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
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
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
          <View style={{ alignItems: "center", gap: 5 }}>
            <Image
              source={require("../../assets/fase1.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              Nạp điện<br></br>thoại
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Image
              source={require("../../assets/fase2.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              Đóng cước<br></br>viễn thông
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Image
              source={require("../../assets/fase3.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              Cài đặt<br></br>thông báo
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Image
              source={require("../../assets/fase4.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              Thông tin<br></br>thuê bao
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/uudai.png")}
          style={{
            width: "100%",
            height: 170,
            marginTop: 30,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Làm nhiều hơn với MyVNPT
        </Text>
        <View style={{ width: "100%", flexDirection: "row", gap: 20 }}>
          <Image
            source={require("../../assets/im1.jpg")}
            style={{
              width: "35%",
              height: 180,
              resizeMode: "contain",
            }}
          ></Image>
          <Image
            source={require("../../assets/im1.jpg")}
            style={{
              width: "35%",
              height: 180,
              resizeMode: "contain",
            }}
          ></Image>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Hỗ trợ nhanh
        </Text>
      </View>
    </View>
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
    overflow: "hidden", // React Native doesn't have direct backdrop-filter equivalent
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
  util: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEDED",
    paddingTop: 15,
    paddingBottom: 15,
  },

  serviceContainer: {
    width: "100%",
    marginTop: 15,
  },
  service: {
    width: 300,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#fff",
  },
});
