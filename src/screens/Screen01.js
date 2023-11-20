import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import sliderData from "../components/sliderData";
import { CheckBox } from "react-native-elements";

export default function Screen01() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/toa-nha-vnpt.jpg")}
        style={{ width: "110%", height: 500, position: "fixed", opacity: 0.8 }}
      ></Image>

      <Modal
        animationType="slide" // You can change the animation type as needed
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#EEF0F0",
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={toggleModal}>
                <Icon name="close" size={25} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Đăng nhập / Đăng ký
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ fontWeight: 700, fontSize: 20, color: "#858A92" }}
                >
                  . . .
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 5,
                marginLeft: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "#7AA0DD",
                  backgroundColor: "#EAF2FF",
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#7AA0DD", fontWeight: 400 }}>
                  Bằng OTP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "#7AA0DD",
                  backgroundColor: "#EAF2FF",
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#7AA0DD", fontWeight: 400 }}>
                  Bằng 3G/4G
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Nhập số điện thoại của bạn"
              style={{
                color: "#C3C6C7",
                fontWeight: "bold",
                fontSize: 25,
                padding: 15,
              }}
            ></TextInput>
            <View
              style={{
                padding: 10,
                position: "absolute",
                width: "100%",
                bottom: 10,
              }}
            >
              <CheckBox
                title="Tôi đồng ý với Điều khoản sử dụng & Chính sách riêng tư của MyVNPT"
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
              />
              <TouchableOpacity
                style={{
                  padding: 10,
                  width: "100%",
                  backgroundColor: "#C2C6C9",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}
                >
                  Tiếp tục
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ padding: 10 }}>
        <View
          style={{
            position: "fixed",
            zIndex: 100,
            top: 20,
            right: 20,
            flexDirection: "row",
            gap: 15,
          }}
        >
          <View style={styles.languageButtonContainer}>
            <Pressable style={styles.languageButton}>
              <Text style={{ fontSize: 12, fontWeight: 400, color: "#fff" }}>
                VN
              </Text>
            </Pressable>
            <Pressable style={styles.languageButton}>
              <Text style={{ fontSize: 12, fontWeight: 400, color: "#fff" }}>
                EN
              </Text>
            </Pressable>
          </View>
          <View style={styles.noficationButton}>
            <Icon name="notifications" size={25} color="black" />
          </View>
        </View>
        <Text
          style={{
            marginTop: "50%",
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: "#fff",
          }}
        >
          Chào mừng quý khách <br></br>đến với MyVNPT
        </Text>
        <Pressable style={styles.button} onPress={toggleModal}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "#3579F0",
            }}
          >
            Đăng nhập / Đăng ký
          </Text>
        </Pressable>
        <View style={styles.utilContainer}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "#363F49",
            }}
          >
            Tiện ích
          </Text>
          <View style={styles.util}>
            <Image
              source={require("../../assets/note-add.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Đăng ký dịch vụ VNPT
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
          <View style={styles.util}>
            <Image
              source={require("../../assets/invoice.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Ký hợp đồng điện tử
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
          <View style={styles.util}>
            <Image
              source={require("../../assets/location.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Tìm điểm giao dịch VNP{" "}
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
        </View>

        <FlatList
          data={sliderData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.service}>
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: 130,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              ></Image>
              <Text style={{ margin: 10, fontSize: 15, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  padding: 4,
                  backgroundColor: "#3177FD",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 100,
                  alignSelf: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: 400, color: "#fff" }}>
                  Chi tiết
                </Text>
              </TouchableOpacity>
              <Text style={{ margin: 10, fontSize: 15 }}>{item.desc}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.serviceContainer}
        />

        <View style={styles.utilContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 30,
              height: 30,
              marginBottom: 10,
            }}
          ></Image>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "#363F49",
            }}
          >
            Liên hệ hỗ trợ
          </Text>
          <View style={styles.util}>
            <Image
              source={require("../../assets/message-search.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Hỏi đáp
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
          <View style={styles.util}>
            <Image
              source={require("../../assets/phone.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Hổ trợ di động
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
          <View style={styles.util}>
            <Image
              source={require("../../assets/wifi.png")}
              style={{
                width: 25,
                height: 25,
              }}
            ></Image>
            <Text style={{ fontSize: 15, position: "absolute", left: 35 }}>
              Hỗ trợ Internet/ MyTV/ Cố định
            </Text>
            <Icon name="keyboard-arrow-right" size={25} color="black" />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 70,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/logo2.png")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          ></Image>
          <Text style={{ fontSize: 15, color: "#fff" }}>
            Một sản phẩm của VNPT
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5682D9",
    width: "100%",
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
    backgroundColor: "#fff",
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

  modalContainer: {
    height: "100vh",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
});
