import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useReducer, useState } from "react";
  import axios from "axios";
  import MaterialIcon from "react-native-vector-icons/MaterialIcons";
  import OcticonsIcon from "react-native-vector-icons/Octicons";
  import Feather from "react-native-vector-icons/Feather";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import AntDesign from "react-native-vector-icons/AntDesign";
  export default function Personal({ navigation, route }) {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#33ACFF",
            position: "absolute",
            top: 0,
          }}
        ></View>
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
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Số điện thoại ngoại mạng
                </Text>
                <Text style={{ color: "#fff" }}>0343434</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#fff",
            margin: 15,
          }}
        >
          <View
            style={{
              gap: 10,
              alignItems: "center",
              width: "30%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EDEFF4",
                borderRadius: "50%",
              }}
            >
              <MaterialCommunityIcons
                name="card-account-details"
                size={32}
                color="#3575FF"
              />
            </TouchableOpacity>
  
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Thông tin tài khoản
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              alignItems: "center",
              width: "30%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EDEFF4",
                borderRadius: "50%",
              }}
            >
              <MaterialCommunityIcons name="history" size={32} color="#3575FF" />
            </TouchableOpacity>
  
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Lịch sử sử dụng
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              alignItems: "center",
              width: "30%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EDEFF4",
                borderRadius: "50%",
              }}
            >
              <MaterialCommunityIcons name="headset" size={32} color="#3575FF" />
            </TouchableOpacity>
  
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Trung tâm hỗ trợ
            </Text>
          </View>
        </View>
        

<Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
            marginLeft: 15,
          }}
        >
          Quản lý thanh toán
        </Text>
        <View
          style={{
            margin: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 15,
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <Feather name="credit-card" size={25} color="#787D82" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#787D82" }}>
              Nguồn tiền
            </Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#2B7AFB",
              width: "40%",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              marginBottom: 15,
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EDEFF4",
                borderRadius: "50%",
              }}
            >
              <MaterialCommunityIcons name="plus" size={32} color="#3575FF" />
            </TouchableOpacity>
  
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "#2D7BF8",
                fontWeight: "bold",
              }}
            >
              Thêm liên kết
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#D7DAD9",
              marginBottom: 20,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="layers-outline"
              size={25}
              color="#787D82"
            />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#787D82" }}>
              Tiện ích thanh toán
            </Text>
            <Feather
              name="chevron-right"
              size={25}
              color="#787D82"
              style={{ position: "absolute", right: 0 }}
            />
          </View>
        </View>


        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 15,
          }}
        >
          Khác
        </Text>
        <View
          style={{
            margin: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 15,
            marginBottom: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#D7DAD9",
              paddingBottom: 15,
            }}
          >
            <AntDesign name="setting" size={25} color="#787D82" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#787D82" }}>
              Cài đặt ứng dụng
            </Text>
            <Feather
              name="chevron-right"
              size={25}
              color="#787D82"
              style={{ position: "absolute", right: 0 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#D7DAD9",
              paddingBottom: 15,
              paddingTop: 15,
            }}
          >
            <AntDesign name="sharealt" size={25} color="#787D82" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#787D82" }}>
              Mã giới thiệu
            </Text>
            <Feather
              name="chevron-right"
              size={25}
              color="#787D82"
              style={{ position: "absolute", right: 0 }}
            />
          </View>
          




          
        </View>




      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#F5F8FD",
    },
  });
  
  