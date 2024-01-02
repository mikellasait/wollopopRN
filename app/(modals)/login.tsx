import { View, Text, StyleSheet, Image } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";

const Page = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();
  const { login, logout, isAuth } = useAuth();

  const snapPoints = useMemo(() => [1, "90%"], []);

  const handleClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ width: 0 }}
        onChange={(index) => {
          if (!index) handleClose();
        }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => handleClose()}>
              <Ionicons name="close" size={28} />
            </TouchableOpacity>
          </View>

          <Image style={styles.loginImg} source={require("@/assets/images/login.png")} />
          <View style={{ width: "100%", alignItems: "flex-start", paddingLeft: 20, paddingBottom: 20 }}>
            <Text style={styles.primaryText}>
              Compra y vende en {"\n"}Wollopop {isAuth ? "true" : "false"}
            </Text>
          </View>

          <Text style={styles.secondaryText}>Consigue los mejores precios y gana {"\n"} dinero con lo que no usas</Text>
          <View style={{ gap: 10 }}>
            <TouchableOpacity style={styles.btn}>
              <MaterialIcons name="facebook" size={28} color="#1877F2" />
              <Text style={{ marginLeft: 7 }}>Continuar con Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={login}>
              <Image
                resizeMode="stretch"
                style={{ width: 20, height: 20 }}
                source={require("@/assets/images/google-logo.png")}
              />
              <Text style={{ marginLeft: 7 }}>Continuar con Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: Colors.wollopop, borderWidth: 0 }]}
              onPress={logout}
            >
              <MaterialCommunityIcons name="email-outline" size={24} color="black" />
              <Text style={{ marginLeft: 7 }}>Continuar con el e-mail</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity>
              <Text style={{ color: Colors.wollopopDark }}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#78838a",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  primaryText: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c313b",
  },
  secondaryText: {
    textAlign: "center",
    marginBottom: 80,
  },
  btn: {
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 70,
    backgroundColor: "#fff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  goBack: {
    position: "absolute",
    right: 15,
    top: 0,
  },
  loginImg: {
    width: 200,
    height: 200,
    marginTop: 60,
  },
  footer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});

export default Page;
