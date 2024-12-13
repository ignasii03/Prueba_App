import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helper/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Bienvenido!</Text>
          <Text style={styles.punchline}>Prueba de App para IOS y Android</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Continuar"
            onPress={() => {}}
            buttonStyle={{ marginHorizontal: wp(3) }}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Ya tienes una cuenta?</Text>
            <Pressable>
              <Text style={[styles.loginText]}>Iniciar sesión</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },

  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontFamily: theme.fonts.extraBold,
  },
  punchline: {
    color: theme.colors.text,
    fontSize: hp(1.7),
    textAlign: "center",
    paddingHorizontal: wp(10),
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
