import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import packageData from "../../datas/packageData";
import { useState } from "react";
export default function SearchPackage({ navigation }) {
  let [foundData, setFoundData] = useState([]);
  let [actived, setActived] = useState("");
  const handleSearch = (text) => {
    const result = packageData.filter((item) => item.tenGoi.includes(text));
    setFoundData(result);
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#C8CBD0",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={25} color="#868B92" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            width: "90%",
          }}
        >
          <Ionicons
            name="search"
            size={25}
            color="#868B92"
            style={{ position: "absolute", left: 10 }}
          />

          <TextInput
            onChangeText={(text) => {
              handleSearch(text);
              setActived("active");
            }}
            style={{
              fontSize: 18,
              padding: 15,
              paddingLeft: 40,
              borderRadius: 10,
              backgroundColor: "#F5F5F5",
              width: "100%",
            }}
          ></TextInput>
        </TouchableOpacity>
      </View>
      <View
        style={{ padding: 25, justifyContent: "center", alignItems: "center" }}
      >
        {actived !== "active" ? (
          <Text style={{ fontSize: 15, fontWeight: 500, color: "#C8CBD0" }}>
            Không có kết quả tìm kiếm gần đây
          </Text>
        ) : null}
      </View>

      <View style={{ padding: 20 }}>
        {actived === "active" ? (
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#C8CBD0",
              marginBottom: 20,
            }}
          >
            Kết quả phù hợp
          </Text>
        ) : null}
        {foundData.map((item) => (
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#C8CBD0",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image
              source={require("../../../assets/logo.png")}
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
              }}
            ></Image>
            <View>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}
              >
                {item.tenGoi}
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#3A75F2" }}
              >
                {item.giaTien + "/" + item.chuKy}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
