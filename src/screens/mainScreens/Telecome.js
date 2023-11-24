import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import searchTrends from "../../datas/searchTrends";
import preferredService from "../../datas/preferredService";
import { TextInput } from "react-native-gesture-handler";
export default function Telecom({ route }) {
  // const { sdt } = route.params;
  const sdt = "";
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          height: 140,
          width: "100vw",
          position: "absolute",
          top: -15,
          left: -15,
          backgroundColor: "#3EB1FE",
        }}
      ></View>
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          marginBottom: 5,
          fontWeight: "bold",
          fontFamily: "Roboto",
          marginTop: 15,
        }}
      >
        Viễn thông
      </Text>
      <Text style={{ fontSize: 15, color: "#fff", marginBottom: 40 }}>
        Quản lý đơn giản, hỗ trợ nhanh chóng
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "flex-start",
          width: "100%",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 4,
          marginBottom: 40,
        }}
      >
        <MaterialIcon name="search" size={25} color="#A4A8AB" />
        <TextInput
          placeholder="Tìm kiếm tiện ích"
          style={{ color: "#A4A8AB", fontSize: 15 }}
        ></TextInput>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          marginBottom: 50,
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        Dịch vụ của tôi
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          marginBottom: 20,
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        Tiện ích
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        {preferredService.slice(-4).map((item, index) => (
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
          marginBottom: 30,
        }}
      ></Image>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          marginBottom: 30,
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        Quản lý tài khoản
      </Text>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#F5F8FD",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginBottom: 30,
        }}
      >
        <Image
          source={require("../../../assets/bulb.png")}
          style={{
            width: 70,
            height: 70,
          }}
        ></Image>
        <Text tyle={{ fontSize: 15 }}>
          Đăng ký quản lý tài khoản nếu bạn có nhu cầu kiểm tra, thanh toán hộ
          cho gia đình, bạn bè
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          Điểm giao dịch gần tôi
        </Text>
        <Text style={{ fontSize: 12, color: "#347DF2" }}>Xem tất cả</Text>
      </View>
      <Image
        source={require("../../../assets/location-img.png")}
        style={{
          width: 120,
          height: 120,
          alignSelf: "center",
          marginBottom: 20,
        }}
      ></Image>
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          marginBottom: 20,
          color: "#767A7F",
        }}
      >
        Bạn vui lòng cho phép MyVNPT truy cập vị trí để giúp bạn tìm điểm giao
        dịch tốt hơn nhé!
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 30,
          padding: 7,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "#2F7AFA",
          width: "fit-content",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Cho phép
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
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
