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
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import sliderData from "./sliderData";
export default function Slider() {
  //   const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        data={sliderData}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.image}
              style={{ width: "60%", height: 250 }}
            ></Image>
          </View>
        )}
        horizontal
        // showsHorizontalScrollIndicator
        // pagingEnabled
        // bounces={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5682D9",
    width: "100%",
  },
});
