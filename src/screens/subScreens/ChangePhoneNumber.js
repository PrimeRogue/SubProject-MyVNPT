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
import Octicons from "react-native-vector-icons/Octicons";
import DropDownPicker from "react-native-dropdown-picker";
import vietnamCityData from "../../datas/vietnamCityData";
import { RadioButton } from "react-native-paper";

export default function ChangePhoneNumber({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState("first");
  const [checked2, setChecked2] = useState("home");

  const [items, setItems] = useState(
    [...vietnamCityData].map((item) => ({
      label: item.city,
      value: item.city,
    }))
  );

  // const prefixPhoneNumberArray = [...vietnamCityData].map((item) => ({
  //   label: item,
  //   value: item,
  // }));

  // console.log(prefixPhoneNumberArray);
  return (
    <ScrollView style={styles.container}>
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
          Chuyển số giữ mạng
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#174D8D",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          position: "fixed",
          top: 60,
        }}
      >
        <Image
          source={require("../../../assets/vinaphonelogo.png")}
          style={{
            width: 160,
            height: 50,
            resizeMode: "contain",
          }}
        ></Image>
        <Octicons name="three-bars" size={30} color="#fff" />
      </View>
      <View style={{ padding: 15, marginTop: 90 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 10,
          }}
        >
          Về VinaPhone,<br></br>Số Hưởng Ngay Thôi
        </Text>
        <Text style={{ fontSize: 18, color: "#fff", marginBottom: 50 }}>
          Đăng kí thông tin ngay hôm nay để chúng tôi có thể liên hệ và phục vụ
          bạn.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextInput
            placeholder="Tên"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "50%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
          <TextInput
            placeholder="SĐT hiện nay"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "50%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
          }}
        >
          <TextInput
            placeholder="Địa chỉ (Số nhà - Đường)"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
          }}
        >
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#fff",
            }}
            // Set the top right border radius to 0
            placeholderStyle={{ color: "#A1CCED" }}
            labelStyle={{ color: "#A1CCED" }}
            placeholder="Chọn thành phố"
            arrowColor="#A1CCED"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Phường / Xã"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Quận / Huyện"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Tên người giới thiệu"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="SĐT người giới thiệu"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <Text style={{ fontSize: 15, color: "#F3FFFE", marginTop: 10 }}>
          Loại thuê bao ở nhà mạng cũ:
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked("first")}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            color="#F3FFFE"
          />
          <Text style={{ fontSize: 15, color: "#F3FFFE" }}>Trả trước</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked("second")}
        >
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            color="#F3FFFE"
          />
          <Text style={{ fontSize: 15, color: "#F3FFFE" }}>Trả sau</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, color: "#F3FFFE", marginTop: 10 }}>
          Chọn địa điểm chuyển mạng:
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked2("home")}
        >
          <RadioButton
            value="home"
            status={checked2 === "home" ? "checked" : "unchecked"}
            color="#F3FFFE"
          />
          <Text style={{ fontSize: 15, color: "#F3FFFE" }}>Tại nhà</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setChecked2("shop")}
        >
          <RadioButton
            value="shop"
            status={checked2 === "shop" ? "checked" : "unchecked"}
            color="#F3FFFE"
          />
          <Text style={{ fontSize: 15, color: "#F3FFFE" }}>
            Tại cửa hàng giao dịch
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, color: "#F3FFFE", marginTop: 10 }}>
          Nhập mã xác thực:
        </Text>
        <Image
          source={require("../../../assets/captcha1.jpg")}
          style={{
            width: 160,
            height: 50,
            resizeMode: "contain",
          }}
        ></Image>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: "100%",
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          <TextInput
            placeholder="Nhập mã xác nhận"
            style={{
              padding: 10,
              paddingLeft: 15,
              width: "100%",
              borderWidth: 1,
              borderColor: "#fff",
              color: "#A1CCED",
              borderRadius: 5,
            }}
          ></TextInput>
        </View>
        <TouchableOpacity
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
          <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
            ĐĂNG KÝ NGAY
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
    backgroundColor: "#00508D",
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
