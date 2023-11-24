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
  
  