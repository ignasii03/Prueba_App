import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { wp, hp } from "../helper/common";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { theme } from "../constants/theme";
const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
});
