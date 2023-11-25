import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import vinaphoneNumber from "../../datas/vinaphoneNumber";
import axios from "axios";

import { useState } from "react";

export default function BuyPhoneSim({ navigation, route }) {
  const [checked, setChecked] = useState("first");
  const [marginBottomDropdown, setMarginBottomDropdown] = useState(0);
  const [marginBottomDropdown2, setMarginBottomDropdown2] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [findNumber, setFindNumber] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [purchasedPhoneNumber, setPurchasedPhoneNumber] = useState("");
  const [phoneNumberFoundArr, setPhoneNumberFoundArr] = useState([]);
  const prefixPhoneNumberSet = new Set();
  vinaphoneNumber.forEach((item) => {
    const prefixPhoneNumber = item.sdt.substring(0, 3);
    prefixPhoneNumberSet.add(prefixPhoneNumber);
  });
  const prefixPhoneNumberArray = [...prefixPhoneNumberSet].map((item) => ({
    label: item,
    value: item,
  }));
  const [items, setItems] = useState(prefixPhoneNumberArray);
  const handleSearchPhoneNumber = () => {
    const findArr = vinaphoneNumber.filter(
      (item) => item.sdt.startsWith(value) && item.sdt.includes(findNumber)
    );
    setPhoneNumberFoundArr(findArr);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const postPurchasedPhoneNumber = async (item) => {
    try {
      const apiUrl =
        "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/purchasedPhoneNumber"; // Thay thế bằng URL của MockAPI của bạn

      const postData = {
        sdt: item,
        OTP: item.slice(-4),
      };

      const response = await axios.post(apiUrl, postData);

      console.log("Response from server:", response.data);
      return response.data; // Trả về dữ liệu từ server nếu cần
    } catch (error) {
      console.error("Error while posting data:", error);
      throw error; // Xử lý lỗi hoặc chuyển tiếp nếu cần
    }
  };

  console.log(route.params);
  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide" // You can change the animation type as needed
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              width: "100vw",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 10,
                padding: 25,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                opacity: 1,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Mua số thành công!
              </Text>
              <Text
                style={{ fontSize: 15, marginTop: 10, textAlign: "center" }}
              >
                Số điện thoại của bạn là: {purchasedPhoneNumber}
              </Text>
              <Image
                source={require("../../../assets/thanhcongicon.png")}
                style={{
                  width: "60%",
                  height: 50,
                  resizeMode: "contain",
                  margin: 20,
                }}
              ></Image>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LogIn", { setIsChecked: true });
                  // navigation.popToTop();
                  // popToTop
                }}
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  backgroundColor: "#32C671",
                  borderRadius: 5,
                  zIndex: 500,
                  elevation: 500,
                }}
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>Quay lại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          height: 60,
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
          Mua Sim Vinaphone
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F92780",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 5,
          padding: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Octicons name="three-bars" size={25} color="#fff" />
        <Image
          source={require("../../../assets/vnptlogo.png")}
          style={{
            width: 200,
            height: 50,
            resizeMode: "contain",
          }}
        ></Image>
      </View>
      <View
        style={{
          backgroundColor: "#E1E1E1",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 15 }}>Khách hàng cá nhân</Text>
        <Ionicons name="arrow-forward-sharp" size={20} color="#0EA5DB" />
        <Text style={{ fontSize: 15 }}>Sim số</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 18 }}>Loại thuê bao</Text>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked("first")}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
          />
          <Text>Trả trước</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked("second")}
        >
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
          />
          <Text>Trả sau</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", flexDirection: "row", padding: 15 }}>
        <Text style={{ width: "40%", fontSize: 18 }}>Đầu số</Text>
        <Text style={{ width: "60%", fontSize: 18 }}>Nhập số bạn cần tìm</Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: 15,
          marginBottom: marginBottomDropdown,
        }}
      >
        <View style={{ width: "40%" }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onOpen={() => setMarginBottomDropdown(200)}
            onClose={() => setMarginBottomDropdown(0)}
            style={{
              borderTopRightRadius: 0, // Set the top right border radius to 0
              borderBottomRightRadius: 0, // Set the bottom right border radius to 0
            }}
          />
        </View>
        <TextInput
          placeholder="Ví dụ: '12' hoặc '789'"
          onChangeText={(text) => setFindNumber(text)}
          style={{
            width: "60%",
            padding: 10,
            fontSize: 15,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopRightRadius: 10, // Set the top right border radius to 0
            borderBottomRightRadius: 10,
            color: "#7B7B7B",
          }}
        ></TextInput>
      </View>
      {checked === "second" ? (
        <Text style={{ width: "40%", fontSize: 18, marginLeft: 15 }}>
          Theo cước cam kết
        </Text>
      ) : null}
      {checked === "second" ? (
        <View
          style={{
            width: "100%",
            padding: 15,
            marginBottom: marginBottomDropdown2,
          }}
        >
          <DropDownPicker
            listMode="SCROLLVIEW"
            open={open2}
            value={value}
            items={items}
            setOpen={setOpen2}
            setValue={setValue}
            setItems={setItems}
            onOpen={() => setMarginBottomDropdown2(200)}
            onClose={() => setMarginBottomDropdown2(0)}
            dropDownContainerStyle={{
              zIndex: 10000,
              elevation: 1000,
            }}
            style={{
              borderTopRightRadius: 0, // Set the top right border radius to 0
              borderBottomRightRadius: 0, // Set the bottom right border radius to 0
            }}
            zIndex={1000}
            zIndexInverse={1000}
          />
        </View>
      ) : null}

      <TouchableOpacity
        onPress={handleSearchPhoneNumber}
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: "#EF0578",
          borderRadius: 5,
          zIndex: 500,
          elevation: 500,
        }}
      >
        <Text style={{ fontSize: 15, color: "#fff" }}>Tìm kiếm</Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: 15,
          marginTop: 20,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: "#7B7B7B",
        }}
      >
        <Text style={{ width: "20%", fontSize: 18 }}>STT</Text>
        <Text style={{ width: "80%", fontSize: 18 }}>Số thuê bao</Text>
      </View>
      {phoneNumberFoundArr.map((item, index) => (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: "#7B7B7B",
          }}
        >
          <Text style={{ width: "20%", fontSize: 18, color: "#7B7B7B" }}>
            {index + 1}
          </Text>
          <Text style={{ width: "50%", fontSize: 18, color: "#7B7B7B" }}>
            {item.sdt}
          </Text>
          <TouchableOpacity
            onPress={() => {
              postPurchasedPhoneNumber(item.sdt);
              toggleModal();
            }}
            style={{
              width: "30%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "#EF0578",
              borderRadius: 5,
              zIndex: 500,
              elevation: 500,
            }}
          >
            <Text style={{ fontSize: 15, color: "#fff" }}>Mua số</Text>
          </TouchableOpacity>
        </View>
      ))}
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
