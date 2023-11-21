import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
export default function PackOfData() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 15,
          paddingTop: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: "50%",
            backgroundColor: "#A4D9FD",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcon name="search" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: "#fff",
          width: "50%",
          marginLeft: 15,
          marginBottom: 50,
        }}
      >
        Khám phá hàng trăm gói cước hấp dẫn cùng MyVNPT
      </Text>
      <View style={{ padding: 15, borderRadius: 10, backgroundColor: "#fff" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
          Nhiều người quan tâm nhất
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Image
            source={require("../../assets/uudai.png")}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          ></Image>
          <Image
            source={require("../../assets/uudai.png")}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              position: "absolute",
              left: 20,
            }}
          ></Image>
          <Text style={{ fontSize: 15, color: "#777B7E", marginLeft: 25 }}>
            + 2.400.000 người tin dùng
          </Text>
        </View>
        <Image
          source={require("../../assets/uudai.png")}
          style={{
            width: "100%",
            height: 170,
            marginBottom: 30,
          }}
        ></Image>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Tiếp tục khám phá
        </Text>
        <Text style={{ fontSize: 15, color: "#777B7E", marginBottom: 10 }}>
          Hàng trăm gói cước hấp dẫn chờ bạn
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            padding: 0,
          }}
        >
          <Image
            source={require("../../assets/explo1.png")}
            style={{
              width: "50%",
              height: 120,
              flex: 1,
              resizeMode: "contain",
            }}
          ></Image>
          <Image
            source={require("../../assets/explo2.png")}
            style={{
              width: "50%",
              height: 120,
              flex: 1,
              resizeMode: "contain",
            }}
          ></Image>
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Image
            source={require("../../assets/explo3.png")}
            style={{
              width: "50%",
              height: 120,
              flex: 1,
              resizeMode: "contain",
            }}
          ></Image>
          <Image
            source={require("../../assets/explo4.png")}
            style={{
              width: "50%",
              height: 120,
              flex: 1,
              resizeMode: "contain",
            }}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33ACFF",
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
