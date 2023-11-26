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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function Recharge({ navigation, route }) {
  const { sdt, setTaiKhoanChinh, setTaiKhoanKM } = route.params;
  const [tab, setTab] = useState("tab1");
  const [actived, setActived] = useState();
  const [price, setPrice] = useState();

  const handleRecharge = async (price) => {
    try {
      // Fetch data
      const apiUrl =
        "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/purchasedPhoneNumber";
      const response = await axios.get(apiUrl);

      // Find the index of the entry with the matching sdt
      const index = response.data.findIndex((entry) => entry.sdt === sdt);

      if (index !== -1) {
        // Update data
        response.data[index].taikhoanchinh += price;
        setTaiKhoanChinh((response.data[index].taikhoanchinh += price));

        // PUT request to update data
        await axios.put(`${apiUrl}/${response.data[index].id}`, {
          taikhoanchinh: response.data[index].taikhoanchinh,
        });

        console.log("Update successful");
      } else {
        console.error(`No entry found for sdt: ${sdt}`);
      }
    } catch (error) {
      console.error("Error updating taikhoanchinh:", error);
    }
  };
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
          <Ionicons name="arrow-back-sharp" size={25} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Nạp tiền điện thoại
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: "#fff",
          marginTop: 30,
          marginBottom: 10,
          marginLeft: 15,
        }}
      >
        Số Điện Thoại
      </Text>
      <View
        style={{
          margin: 15,
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <TextInput
          value={sdt}
          style={{
            width: "90%",
            fontSize: 25,
            fontWeight: "bold",
            color: "#fff",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "white",
          }}
        ></TextInput>
        <MaterialIcons name="contact-phone" size={35} color="white" />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          onPress={() => setTab("tab1")}
          style={{
            padding: 15,
            borderBottomWidth: 2,
            borderBottomColor: tab === "tab1" ? "#3476FF" : "#fff",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: tab === "tab1" ? "#3476FF" : "#A0A1A7",
            }}
          >
            Nạp điện thoại
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
            width: "33%",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: tab === "tab2" ? "#3476FF" : "#A0A1A7",
            }}
          >
            Mua mã thẻ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("tab3")}
          style={{
            padding: 15,
            borderBottomWidth: 2,
            borderBottomColor: tab === "tab3" ? "#3476FF" : "#fff",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: tab === "tab3" ? "#3476FF" : "#A0A1A7",
            }}
          >
            Nạp tự động
          </Text>
        </TouchableOpacity>
      </View>
      {tab === "tab1" ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 8,
              padding: 8,
            }}
          >
            {[
              { price: 10000, priceText: "10.000đ", id: 1 },
              { price: 20000, priceText: "20.000đ", id: 2 },
              { price: 30000, priceText: "30.000đ", id: 3 },
              { price: 50000, priceText: "50.000đ", id: 4 },
              { price: 100000, priceText: "100.000đ", id: 5 },
              { price: 200000, priceText: "200.000đ", id: 6 },
              { price: 300000, priceText: "300.000đ", id: 7 },
              { price: 500000, priceText: "500.000đ", id: 8 },
            ].map((item) => (
              <TouchableOpacity
                onPress={() => {
                  setActived(item.id);
                  setPrice(item.price);
                }}
                style={{
                  width: "31%",
                  borderRadius: 10,
                  borderWidth: actived === item.id ? 2 : 1,
                  borderColor: actived === item.id ? "#0968E6" : "#8E9499",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: actived === item.id ? "#0968E6" : "#5E646B",
                    fontWeight: "bold",
                  }}
                >
                  {item.priceText}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => handleRecharge(price)}
            style={{
              padding: 15,
              width: "80%",
              backgroundColor: "#2C5EFF",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              alignSelf: "center",
              margin: 15,
            }}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
              Nạp ngay
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#616469",
              margin: 15,
            }}
          >
            Bạn cần đăng nhập ví để kiểm tra lịch sử tra cứu
          </Text>
          <TouchableOpacity
            style={{
              width: "90%",
              borderRadius: 30,
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              margin: 15,
              alignSelf: "center",
              borderWidth: 2,
              borderColor: "#377BF6",
              borderStyle: "dotted",
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#377BF6" }}
            >
              Đăng nhập ngay
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0968E6",
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
