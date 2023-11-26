// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Telecome from "./Telecome";
import PackOfData from "./PackOfData";
import Personal from "./Personal";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route }) => {
  const { sdt, taikhoanchinh, taikhoankm } = route.params;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Trang chủ") {
            iconName = "ios-home";
          } else if (route.name === "Viễn thông") {
            iconName = "ios-planet";
          } else if (route.name === "Gói cước") {
            iconName = "ios-analytics";
          } else if (route.name === "Cá nhân") {
            iconName = "ios-person";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{ headerShown: false }}
        initialParams={{
          sdt: sdt,
          taikhoanchinh: taikhoanchinh,
          taikhoankm: taikhoankm,
        }}
      />
      <Tab.Screen
        name="Viễn thông"
        component={Telecome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Gói cước"
        component={PackOfData}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Personal}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
