import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Notification({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: "#2C5EFF",
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
          <Ionicons name="arrow-back-sharp" size={25} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Thông báo
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
          margin: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 15 }}>
          📲 Nạp điện thoại - Tích điểm - Đổi quà 🎁 Với mỗi 1️⃣.0️⃣0️⃣0️⃣ đồng
          thanh toán nạp điện thoại thành công qua ứng dụng VNPT Money - Khách
          hàng được tặng 1 điểm thân thiết! Đặc biệt từ nay đến 31/12/2023 👇🏻👇🏻
          🌟 Điểm thân thiết VNPT Money Loyalty sẽ được quy đổi tương ứng thành
          các Thẻ quà thanh toán đa năng siêu hấp dẫn: Giảm 10K, 20K, 50K, 100K.
          👉🏻👉🏻 Nạp điện thoại hưởng ưu đãi ngay hôm nay! 📍 Khám phá thêm tại:
          https://loyalty.vnptmoney.vn/the-le-chuong-trinh #VNPTMoney
          #MobileMoney #napdienthoai 📲 Nạp điện thoại - Tích điểm - Đổi quà 🎁
          Với mỗi 1️⃣.0️⃣0️⃣0️⃣ đồng thanh toán nạp điện thoại thành công qua ứng
          dụng VNPT Money - Khách hàng được tặng 1 điểm thân thiết! Đặc biệt từ
          nay đến 31/12/2023 👇🏻👇🏻 🌟 Điểm thân thiết VNPT Money Loyalty sẽ được
          quy đổi tương ứng thành các Thẻ quà thanh toán đa năng siêu hấp dẫn:
          Giảm 10K, 20K, 50K, 100K. 👉🏻👉🏻 Nạp điện thoại hưởng ưu đãi ngay hôm
          nay! 📍 Khám phá thêm tại:
          https://loyalty.vnptmoney.vn/the-le-chuong-trinh #VNPTMoney
          #MobileMoney #napdienthoai 📲 Nạp điện thoại - Tích điểm - Đổi quà 🎁
          Với mỗi 1️⃣.0️⃣0️⃣0️⃣ đồng thanh toán nạp điện thoại thành công qua ứng
          dụng VNPT Money - Khách hàng được tặng 1 điểm thân thiết! Đặc biệt từ
          nay đến 31/12/2023 👇🏻👇🏻 🌟 Điểm thân thiết VNPT Money Loyalty sẽ được
          quy đổi tương ứng thành các Thẻ quà thanh toán đa năng siêu hấp dẫn:
          Giảm 10K, 20K, 50K, 100K. 👉🏻👉🏻 Nạp điện thoại hưởng ưu đãi ngay hôm
          nay! 📍 Khám phá thêm tại:
          https://loyalty.vnptmoney.vn/the-le-chuong-trinh #VNPTMoney
          #MobileMoney #napdienthoai
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
