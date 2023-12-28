import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#13C1AC" }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color }) => <Ionicons name="ios-heart-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: "Súbelo",
          tabBarIcon: ({ size, color }) => <Ionicons name="add-circle-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarLabel: "Buzón",
          tabBarIcon: ({ size, color }) => <Ionicons name="md-mail-open-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Tú",
          tabBarIcon: ({ size, color }) => <Ionicons name="happy-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
