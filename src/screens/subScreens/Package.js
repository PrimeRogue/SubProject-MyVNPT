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
        <View
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
        </View>
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
          YOLO100M
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
            1GB/ngày
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "60%" }}>
            30 ngày
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
            1GB/ngày
          </Text>
          <Text style={{ fontSize: 15, width: "60%", color: "#717A81" }}>
            30 ngày
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
        <Text style={{ fontSize: 15 }}>
          1. Ưu đãi gói cước - 1 GB data/ngày (hết dung lượng dừng truy cập).
          - Miễn phí data truy cập các ứng dụng Youtube, Facebook và Tiktok
          - Truyền hình MyTV: hơn 140 kênh bao gồm chùm kênh VTVCab 2. Điều kiện
          đăng ký gói cước - Thuê bao Vinaphone kích hoạt mới trong vòng 30 ngày
          kể từ ngày kích hoạt thành công, chưa có các gói COMBO/DATA chu kỳ từ
          1 tháng trở lên. - Áp dụng cho thuê bao Vinaphone theo danh sách 3.
          Gia hạn gói cước - Gói cước tự động gia hạn.  4. Cách kiểm tra các ưu
          đãi còn lại của gói cước - Cú pháp tra cứu: DATA gửi 888 5. Quy định
          sử dụng gói cước - Trên thực tế trong quá trình sử dụng ứng dụng nêu
          trên, người dùng có khả năng phát sinh lưu lượng Data của một số bên
          thứ ba như Apple, Facebook, Google,… trong các thao tác đăng nhập,
          chọn nhạc,… Do đó, thuê bao vẫn có khả năng phát sinh cước data cho
          các lưu lượng truy cập này. - Thời gian cam kết không chuyển mạng giữ
          số: 18 tháng (540 ngày) tính từ ngày đăng ký gói thành công. 6. Tổng
          đài hỗ trợ về dịch vụ di động - Để được hỗ trợ về dịch vụ di động, Quý
          khách vui lòng liên hệ 1800 1091 (miễn phí)
        </Text>
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
