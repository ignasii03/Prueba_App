import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons";

const Login = () => {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      <Icon name="home" />
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
