// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Screen1 from "../components/Screen01"; // Import your screen components
import Screen2 from "../components/Screen02";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Screen1") {
              iconName = "ios-home";
            } else if (route.name === "Screen2") {
              iconName = "ios-person";
            }

            // You can add more icons for other screens

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue", // Change the color of the active tab
          inactiveTintColor: "gray", // Change the color of inactive tabs
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
